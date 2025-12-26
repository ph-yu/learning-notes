# Excel相关问题

## 1. **ExcelJS** 创建并格式化一个Excel工作表
```js

// --- 配置常量 ---
const STYLES = {
  HEADER_ROW_1_FILL: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } }, // 浅灰色
  HEADER_ROW_2_FILL: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } }, // 蓝色
  HEADER_ROW_2_FONT: { color: { argb: 'FFFFFFFF' }, bold: true },
  DATA_FONT: { name: '微软雅黑', size: 10 }, // 统一字体
  DATA_ALIGNMENT: { vertical: 'middle', horizontal: 'left' }, // 数据建议左对齐，更易读
};

const COLUMN_WIDTH_BUFFER = 3;
const FREEZE_PANE_ROW_INDEX = 2; // 冻结前两行

/**
 * 创建并格式化一个Excel工作表
 * @param {Array<Object>} data - 要导出的数据数组
 * @param {Array<Object>} columns - 列配置数组
 * @returns {ExcelJS.Workbook} - 返回包含格式化工作表的工作簿对象
 */
function createFormattedWorksheet(data, columns) {
  // --- 1. 输入验证 ---
  if (!Array.isArray(columns) || columns.length === 0) {
    throw new Error('Columns configuration must be a non-empty array.');
  }
  if (!Array.isArray(data)) {
    // 允许data为空数组，但不允许为非数组
    console.warn('Data is not an array, initializing with empty array.');
    data = [];
  }

  // --- 2. 初始化工作簿和工作表 ---
  const workbook = new ExcelJS.Workbook();
  // 可以设置工作簿属性，如公司信息等
  workbook.creator = 'Your App Name';
  workbook.lastModifiedBy = 'Your App Name';
  
  const worksheet = workbook.addWorksheet('Sheet1'); // 给工作表一个有意义的名字

  // --- 3. 定义列配置 (包含动态宽度计算和默认样式) ---
  const columnConfigs = columns.map(col => {
    // 优化列宽计算：更健壮、更高效
    const headerText = col.header || '';
    // 使用一个更合理的宽度估算方法：中文字符算2个单位，其他算1个
    const estimatedWidth = calculateHeaderWidth(headerText);
    
    return {
      key: col.key,
      width: estimatedWidth + COLUMN_WIDTH_BUFFER,
      style: {
        font: STYLES.DATA_FONT,
        alignment: STYLES.DATA_ALIGNMENT,
      },
    };
  });
  worksheet.columns = columnConfigs;

  // --- 4. 添加表头 ---
  const headerKeyRow = worksheet.addRow(columns.map(c => c.key));
  const headerLabelRow = worksheet.addRow(
    columns.map(c => `${c.header || ''}${c.required ? '*' : ''}`)
  );

  // --- 5. 应用表头样式 ---
  applyHeaderStyles(worksheet, columns);

  // --- 6. 冻结窗格 ---
  worksheet.views = [{ state: 'frozen', ySplit: FREEZE_PANE_ROW_INDEX }];

  // --- 7. 填充数据 ---
  if (data.length > 0) {
    worksheet.addRows(data);
  } else {
    // 如果没有数据，可以插入一行提示信息
    const noDataRow = worksheet.addRow(['没有找到数据']);
    worksheet.mergeCells(`A${noDataRow.number}:${getExcelColumnName(columns.length)}${noDataRow.number}`);
    noDataRow.alignment = { horizontal: 'center', vertical: 'middle' };
    noDataRow.font = { italic: true, color: { argb: 'FF999999' } };
  }
  
  // 可选：自动调整所有列宽以适应内容 (可能会覆盖之前的宽度设置)
  // worksheet.columns.forEach(column => column.width = undefined); 
  // worksheet.autoFilter = { from: 'A1', to: `${getExcelColumnName(columns.length)}2` };

  return workbook;
}

// --- 辅助函数 ---

/**
 * 更健壮的列宽计算方法
 * @param {string} text - 表头文本
 * @returns {number} - 估算的字符宽度单位
 */
function calculateHeaderWidth(text) {
  if (!text) return 10; // 默认宽度
  let width = 0;
  for (const char of text) {
    // 使用 Unicode 范围判断字符类型
    // \u4e00-\u9fa5: CJK Unified Ideographs (中文)
    // \u3000-\u303f: CJK Symbols and Punctuation (中文标点)
    // \uff00-\uffef: Halfwidth and Fullwidth Forms (全角字符)
    if (/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/.test(char)) {
      width += 2;
    } else {
      width += 1;
    }
  }
  // 取最大值，避免过窄
  return Math.max(width, 8); // 最小宽度为8个单位
}

/**
 * 封装应用表头样式的逻辑
 * @param {ExcelJS.Worksheet} worksheet
 * @param {Array<Object>} columns
 */
function applyHeaderStyles(worksheet, columns) {
  const headerKeyRow = worksheet.getRow(1);
  const headerLabelRow = worksheet.getRow(2);

  // 设置第一行表头样式 (浅灰色背景)
  headerKeyRow.eachCell(cell => {
    cell.fill = STYLES.HEADER_ROW_1_FILL;
    cell.font = { ...STYLES.DATA_FONT, bold: true }; // 沿用数据字体，但加粗
    cell.alignment = { ...STYLES.DATA_ALIGNMENT, horizontal: 'center' }; // 居中
  });

  // 设置第二行表头样式 (蓝色背景)
  headerLabelRow.eachCell((cell, colNumber) => {
    cell.fill = STYLES.HEADER_ROW_2_FILL;
    cell.font = STYLES.HEADER_ROW_2_FONT;
    cell.alignment = { ...STYLES.DATA_ALIGNMENT, horizontal: 'center' }; // 居中

    // 为必填项添加批注
    const colConfig = columns[colNumber - 1];
    if (colConfig && colConfig.required) {
      cell.note = '必填字段';
    }
  });
}

/**
 * 根据列索引获取Excel列名 (例如 1 -> A, 27 -> AA)
 * @param {number} index - 从1开始的列索引
 * @returns {string} - Excel列名
 */
function getExcelColumnName(index) {
  let columnName = '';
  let temp = index;
  while (temp > 0) {
    const remainder = (temp - 1) % 26;
    columnName = String.fromCharCode(65 + remainder) + columnName;
    temp = (temp - 1 - remainder) / 26;
  }
  return columnName;
}


// --- 使用示例 ---
// const myWorkbook = createFormattedWorksheet(myData, myColumns);
// await myWorkbook.xlsx.writeFile('Report.xlsx');

```