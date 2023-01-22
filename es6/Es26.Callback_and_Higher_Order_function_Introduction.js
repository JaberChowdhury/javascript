/*
Callback and Higher order function :

Concept:
আমরা চাইলে একটি ফাংশনের প্যারামিটার হিসেবে অন্য
 আরেকটি ফাংশন ব্যবহার করতে পারি। 
আর এই পদ্ধতিতে প্যারামিটার বা আর্গুমেন্টকে
বলা হয় কলব্যাক ফাংশন আর যে ফাংশনে এই  
প্যারামিটার বা আর্গুমেন্ট ব্যবহার করা হবে
 তাকে বলা হয় Higher order function। 
*/

const callback = (user, message) => {
  console.log(`hello ${user},${message}`);
};
const higherOrderFunction = (user, message, argument) => {
  argument(user, message);
};

higherOrderFunction("Jaber", "How are you?", callback);

/*
এখানে higherOrderFunction হলো Higher order function  
এবং  callback হল callback ফাংশন। 


{$} আমাদের কেন এই কলব্যাক ফাংশন ব্যবহার করতে হবে??
[=]> আমরা জানি, জাভাস্ক্রিপ্ট বাই ডিফল্ট একটি Synchoronous language।
কিন্তু বিভিন্ন কাজে আমাদের Asynchoronous 
ফাংশন ব্যবহার করতে হয় ফলে দেখা যায় টাইমআউট সেট 
করার কারনে Asynchoronous ফাংশনটি অনেক পরে এক্সিকিউট
হয়। এতে করে দেখা যায় কিছু কাজে জটিলতা তৈরি হয়।
যেমনঃ f1,f2(Asynchoronous),f3 তিনটি ফাংশন পরপর 
এক্সিকিউট করা দরকার কিন্তু f2 Asynchoronous হওয়ায়
তা সবার পরে এক্সিকিউট হবে। যা আমাদের কাজের
জন্য অসুবিধার। আর এই সমস্যা সমাধানের জন্যই আমাদের 
callback function এর সাহায্য নিতে হয়। যেখানে একটি
 ফাংশন অন্য একটি ফাংশনের প্যারামিটার হিসেবে ব্যবহার করা হয়। 
*/
