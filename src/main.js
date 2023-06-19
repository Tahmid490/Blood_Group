const search = prompt("blood group: ");
const result = blood_Availabe.filter(
  (data) =>
    data.Blood_Group === search &&
    data.cell != false &&
    (data.last_donate >= 160 || data.last_donate >= 130)
);

const final_result = [];
const available = [];

result.forEach((item, index) => {
  if (item.last_donate >= 160) {
    final_result.push(item);
    console.log(
      `${item.name}, you are over ${
        item.last_donate - 160
      } days of 4 month so you can donate blood again`
    );
  } else {
    available.push(item);
    console.log(
      `${item.name}, after ${160 - item.last_donate} days you will ve available`
    );
  }
});

console.table(final_result);
console.table(available);
