import Phone from "./Phone.js";
import PhoneManager from "./PhoneManager.js";

const phoneManager = new PhoneManager();
phoneManager.addPhone(new Phone("123", "iPhone 15", "Apple", 1000));
phoneManager.addPhone(new Phone("456", "Galaxy S24", "Samsung", 900));
phoneManager.addPhone(new Phone("789", "Pixel 9", "Google", 800));

console.log("Danh sách điện thoại trước khi sắp xếp:");
phoneManager.displayUnsortedPhones();

console.log("\nDanh sách điện thoại sau khi sắp xếp:");
phoneManager.displaySortedPhones();