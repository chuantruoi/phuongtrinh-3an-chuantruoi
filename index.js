// index.js

// Hàm giải phương trình bậc 3
function solveCubicEquation(a, b, c, d) {
  // Kiểm tra hệ số a
  if (a === 0) {
    return 'Không phải là phương trình bậc 3.';
  }

  // Tính delta1 và delta2
  const delta1 = b * b - 3 * a * c;
  const delta2 = 2 * b * b * b - 9 * a * b * c + 27 * a * a * d;

  const C = Math.cbrt((delta2 + Math.sqrt(delta2 * delta2 - 4 * delta1 * delta1 * delta1)) / 2);
  const root1 = -1 / (3 * a) * (b + C + delta1 / C);
  const root2 = -1 / (3 * a) * (b + Math.cos(2 * Math.PI / 3) * C + delta1 / (C * Math.cos(2 * Math.PI / 3)));
  const root3 = -1 / (3 * a) * (b + Math.cos(4 * Math.PI / 3) * C + delta1 / (C * Math.cos(4 * Math.PI / 3)));

  return `Phương trình có ba nghiệm: x1 = ${root1}, x2 = ${root2}, x3 = ${root3}`;
}

// Nhận giá trị từ dòng lệnh
const args = process.argv.slice(2);
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);
const d = parseFloat(args[3]);

// Kiểm tra xem đầu vào có hợp lệ không
if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
  console.log('Vui lòng nhập hệ số a, b, c và d là các số hợp lệ.');
} else {
  // Giải phương trình và hiển thị kết quả
  const result = solveCubicEquation(a, b, c, d);
  console.log(result);
}
