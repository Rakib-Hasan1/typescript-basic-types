// Spread operator

const friends = ["Rahim", "Karim"];

const schoolFriends = ["Pintu", "Chintu", "Bulbul", "Chulbul"];

const collageFriends = ["Rakib", "Rayhan", "Imran", "Shuvo"];

friends.push(...schoolFriends);
friends.push(...collageFriends);

console.log(friends);

const user = { name: "Rakib", phoneNo: "017524545455" };

const otherInfo = { hobby: "Travel", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// Rest operator

const sendInvite = (...friends: string[]) => {
  console.log(friends);
  friends.forEach((friend) => console.log(`Send Invitation to ${friend}`));
};

console.log(sendInvite("Rakib", "Imran", "Saddam"));
