const person: {
  name: string;
  balance: number;
  getBalance(money: number): void;
} = {
  name: "arfan",
  balance: 5,
  getBalance(money: number) {
    console.log(this.balance + money)
  },
};



const myFriends = ['mamun', 'rinku', 'ontu', 'bakker'];
const newFrineds = ['aliza','nabani']
myFriends.push(...newFrineds)

const greetFriends = (...rest:string[]):void => {
 rest.forEach(frined => {
  console.log(`Hi ${frined}`)
 })
}
greetFriends('Hasen', 'mubarak','asdf')