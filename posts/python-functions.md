---
title: "Python Functions 101"
subtitle: "Essential Concepts and Practical Examples to Learn Python Functions"
date: "2022-02-07"
language: "mm"
---

Program တစ်ခု ရေးပြီ ဆိုရင် Function တွေကို မဖြစ်မနေအသုံးပြုရပါတယ်။ Function ဆိုတာက ထပ်ခါထပ်ခါသုံးလို့ရတဲ့ ကုဒ်တွေကို ပြန်သုံးနိုင်အောင် စုစည်းထားတဲ့ block တစ်ခုပါ။ လုပ်ငန်းတစ်ခုထဲကို အတူတူလုပ်ဆောင်တဲ့ ကုဒ်တွေကို Function တွေနဲ့ Organize လုပ်ထားတဲ့ အခါမှာ Program တစ်ခုက နားလည်ရလွယ်တဲ့အတွက် error ပါနေရင်လည်း လွယ်လွယ်ကူကူ Debug လုပ်နိုင်ပါတယ်။ Function တွေရဲ့ အဓိက အသုံးဝင်တဲ့ အချက်ကတော့ Program တစ်ခုမှာ သုံးထားတဲ့ Function တွေကို အလားတူ လုပ်ငန်းတွေ လုပ်ဆောင်ဖို့အတွက် အခြား Program တစ်ခုမှာလည်း ပြန်သုံးနိုင်ပါတယ်။ ဒီလို Programming language တိုင်းမှာ အရေးပါတဲ့ Concept တစ်ခုဖြစ်တဲ့ Function တွေအကြောင်းကို လေ့လာကြမှာဖြစ်ပါတယ်။

<details>

<summary>Table of Contents</summary>

- [What is a function?](#what-is-a-function)
- [Built-in Functions](#built-in-functions)
- [User-defined Functions](#user-defined-functions)
- [Arguments \& Parameters](#arguments--parameters)
- [Function Examples](#function-examples)
  - [Positional Arguments](#positional-arguments)
  - [Keyword Arguments](#keyword-arguments)
  - [Default Parameter](#default-parameter)
  - [Returning Single Values](#returning-single-values)
  - [Function Call inside a Function](#function-call-inside-a-function)
  - [Flow of a program](#flow-of-a-program)
  - [Returning Multiple Values](#returning-multiple-values)
- [Conclusion](#conclusion)


</details>

## What is a function?

Function တွေက Printer တစ်ခုလိုပါပဲ။ စာရွက်နဲ့ ထုတ်ဖို့လိုတဲ့ setting တွေကို Input အဖြစ်ထည့်ပေးလိုက်ရင် Printer က အထဲမှာ လိုအပ်တဲ့ တွက်ချက်မှုတွေ၊ လုပ်ဆောင်ချက်တွေကို အစဉ်အတိုင်းလုပ်ပေးပြီး ကိုယ်လိုချင်တဲ့ စာရွက်ကို Result အဖြစ်ထုတ်ပေးပါတယ်။ စာရွက်နောက်တစ်မျိုးထုတ်ချင်တယ်ဆိုရင် ကိုယ်က စာရွက်နဲ့ Setting စတဲ့ Input တွေကို ပြောင်းပေးရုံပါပဲ။ Printer ရဲ့ လုပ်ဆောင်ချက် တွေကို ပြောင်းစရာမလိုပါဘူး။ ဒီလိုပဲ ထပ်ခါထပ်ခါသုံးချင်တဲ့ ကုဒ်တွေကို စုစည်းပြီး Function အဖြစ်သတ်မှတ်လိုက်ပါတယ်။ အသုံးလိုတဲ့ အခါကျ အဲဒီကုဒ်တွေကို ပြန်ရေးစရာမလိုပဲ Function name ခေါ်ပြီး လိုအပ်တဲ့ Input ထည့်ပေးလိုက်တာနဲ့ အထဲက ကုဒ်တွေကို run ပေးမှာပါ။ ကိုယ်က Input ပြောင်းပေးလိုက်ရင် အဲဒီ input တွေပေါ် မူတည်ပြီး Result အသစ်တွေ ရလာမှာပါ။

## Built-in Functions

Built-in Function ဆိုတာက Python ထဲမှာ ပါပြီးသား Function တွေပါ။ Python language ကို တီထွင်ခဲ့တဲ့ သူတွေက အသုံးများတဲ့ လုပ်ဆောင်ချက်တွေကို လုပ်နိုင်တဲ့ Function တွေကို ရေးပေးထားပါတယ်။ ကျွန်တော်တို့က အဲဒီ Function တွေကို ကိုယ်တိုင်ရေးစရာမလိုပဲ ယူသုံးလိုက်ရုံပါပဲ။ အသုံးများဆုံး Built-in Function တစ်ခုကတော့ print-function ပါ။ ကိုယ်ရေးမယ့် စာကို Input အဖြစ်ထည့်ပေးလိုက်ရင် print-function က မျက်နှာပြင်ပေါ်မှာ စာကို result အဖြစ်ထုတ်ပေးပါတယ်။ တစ်ခြား Built-in Function တွေကတော့ Data အမျိုးအစားကို ပြ‌ပေးတဲ့ type-function၊ အ‌ရေအတွက်ကို ပြပေးတဲ့ len-function၊ အကြီးဆုံး/အငယ်ဆုံးကို ပြပေးတဲ့ max/min-function စတာတွေပဲ ဖြစ်ပါတယ်။

## User-defined Functions

Program ထဲမှာ သုံးမယ့် Function အများစုကိုတော့ ကိုယ်တိုင်သတ်မှတ်ပေးရပါတယ်။ ဒီ Function တွေကိုတော့ User-defined Function လို့ခေါ်ပါတယ်။

```py
def functionName(a, b):
  # Function Body
  # Function Body
  # Function Body
  return output
```

Function တစ်ခုကို define လုပ်တော့မယ်ဆိုရင် def-keyword နောက်မှာ Function name ကို သတ်မှတ်ပေးရပါတယ်။ ပြီးရင် input တွေကို သိမ်းပေးမယ့် parameter name တွေကို ကွင်းစ၊ကွင်းပိတ်ထဲ ထည့် ရပါတယ်။ ကိုယ့်ရဲ့ Function က input မလိုရင် ဘာမှထည့်ပေးစရာမလိုပါဘူး။ def-statement ကို colon ( : ) နဲ့ အဆုံးသတ်ပေးရပါတယ်။ Function Body ထဲမှာတော့ run ရမယ့် ကုဒ်တွေကို indent ခြားပြီး ထည့်ရပါမယ်။ Function တစ်ခုရဲ့ အောက်ဆုံးမှာတော့ return-statement ပါရပါမယ်။ Function တစ်ခုက return-statement ရောက်ရင် အဆုံးသတ်ပါတယ်။ return-statement အောက်မှာ ဆက်ရေးထားတဲ့ ကုဒ်တွေကို run မှာ မဟုတ်ပါဘူး။ Output မထုတ်တဲ့ Function တွေဆိုရင် return မထည့်လည်း ရပါတယ်။

## Arguments & Parameters

Funtion တစ်ခုကို define လုပ်လိုက်ရုံနဲ့ အထဲက ကုဒ်တွေကို run မပေးပါဘူး။ Function တစ်ခုကို run ချင်ရင် Function name ကိုခေါ်ပြီး ကွင်းစ၊ ကွင်းပိတ်ထဲမှာ လိုအပ်တဲ့ argument တွေကို ထည့်ပေးရပါတယ်။ ဒီနေရာမှာ သိထားသင့်တာတစ်ခုက Function ခေါ်လိုက်တဲ့အခါမှာ ထည့်ပေးရတဲ့ input တွေကို Arguments လို့ခေါ်ပါတယ်။ Function ထဲမှာ input တွေကို ထည့်သုံးတဲ့ Variable တွေကိုတော့ Parameter လို့ခေါ်ပါတယ်။ အမှန်ကတော့ တန်ဖိုးက အတူတူပါပဲ။ Function အတွင်းနဲ့ အပြင်မှာ အခေါ် အဝေါ်တွေ မတူကြတာပါ။

Input တန်ဖိုး‌တွေ ကို Function ရဲ့ အပြင်မှာဆိုရင် Argument လို့ ခေါ်ပြီး Function definition ထဲမှာဆိုရင်တော့ Parameter လို့ ခေါ်ပါတယ်။

## Function Examples

Function တွေရဲ့ အလုပ်လုပ်ပုံကို နမူနာတွေနဲ့ လေ့လာကြပါမယ်။

```sh
# Defining a function
def sayHello():
    print('This is IndieCoderMM.')
    print('Welcome to my blog!')
# Calling the function
sayHello()
 
# Output
# This is IndieCoderMM.
# Welcome to my blog!
```

အပေါ်မှာ ရေးထားတဲ့ sayHello-function က စာကို print လုပ်ရုံပဲဖြစ်လို့ parameter နဲ့ return-statement တွေ မလိုပါဘူး။ ဒါက အရိုးရှင်းဆုံး Function ပုံစံတစ်ခုပါ။ ဒီတစ်ခါ input တွေကို သုံးရတဲ့ Function တစ်ခုကို ရေးကြည့်ပါမယ်။

```sh
# Function definition
def myPet(pet, name, color):
    print(f"My {pet}'s name is {name} and it's color is {color}.")
# Function call
myPet('dog', 'Mickey', 'brown')
myPet('fish', 'Merlin', 'gold')
 
# Output
# My dog's name is Mickey and it's color is brown.
# My fish's name is Merlin and it's color is gold.
```

ဒီ Function မှာဆိုရင် ထည့်လိုက်တဲ့ input တွေကို pet, name, color စတဲ့ variable တွေနဲ့ သိမ်းထားတာ ဖြစ်ပါတယ်။ ဒီ variable တွေကို Parameter လို့ခေါ်တာ ဖြစ်ပါတယ်။ ဒီ Parameter တွေကို Function ထဲမှာ ဆက်သုံး သွားတာဖြစ်ပါတယ်။ Parameter name တွေက Function ရဲ့ အပြင်က Variable name တွေနဲ့ တူလည်း ရပေမယ့် မတူအောင် ထားတာက ပိုပြီး ရှင်းပါတယ်။

### Positional Arguments

```sh
# Args in wrong positions
myPet('brown','dog','Mickey')
 
# Output
# My brown's name is dog and it's color is Mickey.
```

Function ခေါ်တဲ့ အခါမှာ လိုအပ်တဲ့ Argument တွေကို အစဉ်လိုက်ထည့်ပေးရပါတယ်။ နေရာမှားပြီး ထည့်မိရင် ကိုယ်လိုချင်တဲ့ Result မရပဲ ဖြစ်တတ်ပါတယ်။ ဥပမာ- အပေါ်က myPet-function ကို ခေါ်တဲ့ အခါမှာ Argument တွေ နေရာမှားပြီး ထည့်မိရင် Result အမှားတွေ ထွက်လာနိုင်ပါတယ်။ Argument တွေကို နေရာအလိုက် ထည့်ပေးရတာကို Positional Argument လို့ ခေါ်ပါတယ်။ ဒီ Positional Argument တွေကို နေရာမှားထည့်မိရင် Program က Error ပြမှာမဟုတ်ပါဘူး။ Program အတွက်ကျတော့ pet, name, color စတာတွေက ဘာအဓိပ္ပါယ်မှ မရှိပါဘူး။ သူ့နေရာကကြည့်ရင် လိုအပ်တဲ့ တန်ဖိုးတွေအကုန်ရှိလို့ လုပ်စရာရှိတာကို ပဲ ဆက်လုပ်သွားမှာပါ။

### Keyword Arguments

```sh
myPet(name="Blue", color="green", pet="raptor")
 
# Output 
# My raptor's name is Blue and it's color is green.
```

တစ်ချို့ Function တွေမှာ ထည့်ရမယ့် Argument များလို့ သူတို့ရဲ့ Position တွေအလိုက်မထည့်ချင်ရင် Keyword Argument တွေ ထည့်ပေးလို့ ရပါတယ်။ Parameter name တွေထဲကို တိုက်ရိုက်တန်ဖိုး ထည့်ပေးတာကို keyword Argument ထည့်တယ်လို့ ခေါ်ပါတယ်။ ဒီလို ထည့်ပေးရင် သူတို့‌ရဲ့ Position တွေကို ကြည့်စရာ မလိုပါဘူး။

Function ထဲကို List Dictionary စတဲ့ Data Structure တွေကိုလည်း Argument အဖြစ် ထည့်ပေးလို့ရပါတယ်။

```sh
def printList(ls):
    for i in range(len(ls)):
        print(f" {i+1}. {ls[i]} ")
lang = ['JS', 'Python', 'C++']
printList(lang)
 
# Output
# 1. JS
# 2. Python
# 3. C++
```

### Default Parameter

တန်ဖိုးထည့်မပေးလိုက်ရင် သုံးရမယ့် Default တန်ဖိုးကို Function definition မှာ တစ်ခါတည်း သတ်မှတ်ပေးလို့ရပါတယ်။ အခြား Parameter name တွေရဲ့ နောက်ဆုံးမှာ Default Parameter ကို Variable define လုပ်သလို တန်ဖိုးထည့်ပေးရုံပါပဲ။ Function call မှာ သူ့တန်ဖိုးမထည့်ရင် default တန်ဖိုးကို ယူသုံးသွားမှာပါ။ အောက်မှာ နမူနာ ပြထားပါတယ်။

```py
def  login(name, account="user"):
     print(f"Welcome {name}!")
     if account == "admin":
         print("You can change all settings.")
     else:
         print("You are just a normal user.")
person1 = "Tom"
person2 = "Jerry"
login(person1)
login(person2, "admin")
 
# Output 1
# Welcome Tom!
# You are just a normal user.
 
# Output 2
# Welcome Jerry!
# You can change all settings.
```

### Returning Single Values

Program တွေမှာ result တစ်ခုကို ပြန်ထုတ်ပေးတဲ့ Function တွေကို အဓိက အသုံးပြုကြပါတယ်။ ကိုယ်ပေးလိုက်တဲ့ input ပေါ်မူတည်ပြီး Function က output value ထုတ်ပေးလိုက်တဲ့ အခါ ရလာတဲ့ တန်ဖိုးကို လိုအပ်တဲ့ နေရာမှာ ဆက်အသုံးပြုကြတာ ဖြစ်ပါတယ်

```sh
def getArea(l, w):
    area = l * w
    return area
 
def getVol(a, h):
    vol = a * h
    return vol
 
length = 4
width = 3
height = 3
rect_area = getArea(length, width)
rect_vol = getVol(rect_area, height)
 
print(f"Volume of the box is {rect_vol}")
 
# Output
# Volume of the box is 36
```

Output result ထုတ်ပေးတဲ့ Function တွေကနေ ရလာတဲ့ တန်ဖိုးကို Variable တွေမှာ ထည့်ပြီး သုံးနိုင်ပါတယ်။ ရိုးရိုး Function call ရဲ့ အရှေ့မှာ Variable တစ်ခုထားပြီး assign လုပ်လိုက်ရင် ရလာတဲ့ output တန်ဖိုးက Variable ထဲကို ရောက်သွားမှာပါ။ အပေါ်က getArea-function က ပေးလိုက်တဲ့ Parameter နှစ်ခုကို မြှောက်ပြီး ရလာတဲ့ တန်ဖိုးကို return လုပ်ပါတယ်။ Return လုပ်လိုက်တဲ့ တန်ဖိုးက Function Call ဆီကို ပြန်သွားပြီး rect_area variable ထဲကို Assign လုပ်ပါတယ်။ ဒီတန်ဖိုးကိုမှ တခြား Function တွေထဲ ထည့်ပြီး ဆက်သုံးလို့ ရပါတယ်။

### Function Call inside a Function

Function တစ်ခုထဲကနေ အခြား Function ကို ခေါ်ပြီးသုံးလို့ ရပါတယ်။ အပေါ်က ကုဒ်ထဲမှာဆိုရင် getArea-function ကို အပြင်မှာ သပ်သပ် မခေါ်တော့ပဲ getVol-function ကို ဒီလို ပြောင်းရေးနိုင်ပါတယ်။

```sh
def getVol(l, w, h):
    vol = getArea(l, w) * h
    return vol
 
rect_vol = getVol(3, 2, 1)
print(rect_vol)
 
# Output# 6
```
### Flow of a program

ဒီနေရာမှာ Program ရဲ့ flow ကို သိထားဖို့ လိုပါတယ်။ ကုဒ်တွေကို run တဲ့ အစီစဉ်ကို Flow of execution လို့ ခေါ်ပါတယ်။ Program တစ်ခုမှာ ကုဒ်‌တွေကို အပေါ်ဆုံးက စပြီး run ပါတယ်။ ဒါပေမယ့် Function definition တွေကတော့ flow ထဲမှာ မပါပါဘူး။ Function ထဲက ကုဒ်တွေက Function ကို ခေါ်လိုက်မှ အလုပ်လုပ်မှာပါ။ Function ခေါ်လိုက်တဲ့ နေရာမှာ Function ထဲက ကုဒ်တွေ အစားဝင်လာတယ်လို့ မြင်ကြည့်နိုင်ပါတယ်။ ဒီတော့ နောက်ကုဒ်တစ်ကြောင်းကို တန်းမသွားပဲ အစားဝင်လာတဲ့ Function ထဲကုဒ်တွေကို အရင် run ပါတယ်။ ပြီးမှ နောက်တစ်ကြောင်း ဆက်သွားပါတယ်။ ဒီအထိတော့ ရိုးရှင်းတယ်ထင်ရပေမယ့် Function ထဲမှာ အခြား Function ကို ထပ်ခေါ်ထားရင် အပြင်က Function ကို run နေတာ ခဏရပ်ပြီး နောက် Function ထဲကို ဝင်သွားမှာပါ။ ပြီးမှ ရပ်ထားတဲ့ နေရာကို ပြန်ရောက်လာပြီး ဆက် run မှာ ဖြစ်ပါတယ်။ ဒါကြောင့် Program တစ်ခုကို ဖတ်တဲ့ အခါမှာ Program ရဲ့ flow အတိုင်း လိုက်ကြည့်ဖို့လိုပါတယ်။

### Returning Multiple Values

Function တစ်ခုထဲကနေ return value တွေ တစ်ခုထက်ပိုပြီး ထုတ်မယ်ဆိုရင် Return လုပ်မယ့် တန်ဖိုးတွေကို comma ( , ) ခြားပြီး ရေးလိုက်ရုံပါပဲ။

```sh
def myPlanet(name, r, pi=3.14):
    circum = 2 * pi * r
    area = 4 * pi * (r**2)
    vol = (4 * pi * (r**3)) / 3
    return name.upper(), circum, area, vol
 
n, c, a, v = myPlanet('trex', 3)
print(f"Planet {n} has circumference of {c}, area of {a} and volume of {v}")
 
# Output
# Planet TREX has circumference of 18.84, area of 113.04 and volume of 113.04
```

## Conclusion
ကျွန်တော်တို့ ဒီ post မှာဆိုရင် Function တွေရဲ့ အခြေခံ သဘောတရားတွေနဲ့ Python language မှာ Function တွေ အသုံးပြုပုံတွေကို လေ့လာခဲ့ကြတာ ဖြစ်ပါတယ်။ Beginner တွေ အနေနဲ့ Function တွေကို ထိထိရောက်ရောက် ရေးတတ်၊ သုံးတတ်လာပြီဆိုရင် ကိုယ့်ရဲ့ Programming skill က ပိုပြီး တိုးတက်အဆင့်မြင့်လာမှာ ဖြစ်ပါတယ်။ Function တွေအကြောင်းကို လေ့လာတဲ့ နေရာမှာ ဒီ post က အထောက်အကူ ဖြစ်စေမယ်လို့မျှော်လင့်ပါတယ်။
