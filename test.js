// ㄷㅐ문자 만들기
function makesUpercase(value) {
  console.log(value.toUpperCase());
}

// 거꾸로 말하기
function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const myname = `${name} hi`;
  cb(myname);
}

// handleName("sujin", makesUpercase);
// handleName("sujin", reverseString);
handleName("kevin", (value) => console.log(value));

const people = [
  {
    name: "bob",
    location: { street: "123 main", timezone: { offset: "+7" } },
  },
  { name: "sujin", location: { street: "5168 yonge" } },
  {
    name: "susan",
    location: {
      street: "345 apple",
      timezone: { offset: "+9" },
    },
  },
];

people.forEach((person) => {
  //console.log(person && location ) => 얘네는 없으면 깨짐
  console.log(person?.location?.timezone?.offset || "hello");
});
