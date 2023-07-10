---
title: "Lambda Functions in Python"
subtitle: "Write Efficient Python Code with Anonymous Functions"
date: "2022-05-11"
language: "mm"
tags: ['functional', 'python']
---

Lambda function တွေက Computer programming မှာ အ‌ရေးပါတဲ့ Concept တစ်ခုဖြစ်ပါတယ်။ ကျစ်လျစ်ထိရောက်တဲ့ ကုဒ်တွေကို မြန်မြန်ဆန်ဆန်နဲ့ ရေးနိုင်ဖို့ အတွက် Lambda function တွေကို သေသေချာချာ နားလည်ထားဖို့ လိုပါတယ်။ ဒီ Post မှာတော့ Lambda တွေကို Python language မှာ ဘယ်လို အသုံးပြုရမယ်ဆိုတာကို လေ့လာကြမှာ ဖြစ်ပါတယ်။

<details>

<summary>Table of Contents</summary>

- [Lambda Syntax](#lambda-syntax)
- [Basics Of Lambda Functions](#basics-of-lambda-functions)
- [Usages of Lambda Functions](#usages-of-lambda-functions)
  - [1. filter() Function](#1-filter-function)
  - [2. map() Function](#2-map-function)
  - [3. sorted() Function](#3-sorted-function)
  - [4. reduce() Function](#4-reduce-function)
  - [5. Returning Function Objects](#5-returning-function-objects)
- [Summary](#summary)


</details>

## Lambda Syntax

Lambda function ဆိုတာ နာမည်မပါတဲ့ Function အငယ်စားလေးတွေပါ။ သူတို့ကို Anonymous function လို့လည်း ခေါ်ကြပါတယ်။ Expression တစ်ခုပဲ လုပ်ပေးတဲ့ Function တွေကို Lambda နဲ့ အတိုကောက်ပြောင်းရေးနိုင်ပါတယ်။ Python lambda function တစ်ခုမှာ အပိုင်း ၃ ပိုင်း ပါဝင်ပါတယ်။

1. lambda keyword - Normal function တွေကို def keyword နဲ့ သတ်မှတ်ပြီး Lambda function တွေကို lambda နဲ့ သတ်မှတ်ပါတယ်။
2. Arguments - lambda keyword ရဲ့နောက်မှာ လိုအပ်တဲ့ argument တွေ ထည့်ပေးရပါတယ်။
3. Expression - Function အနေနဲ့ လုပ်ပေးရမယ့် Expression တစ်ခု လိုပါတယ်။

```py
# Lambda Syntax
lambda <arguments> : <expression>
```

## Basics Of Lambda Functions

သာမန် Function နဲ့ အဓိက မတူတဲ့ အချက်က Lambda တွေမှာ Identifier မလိုပါဘူး။ ဒါပေမယ့် သူတို့ကို Variable တစ်ခုမှာ assign လုပ်ပြီး ရိုးရိုး Function တွေ အတိုင်း သုံးလို့ရပါတယ်။ နမူနာအနေနဲ့ ကိန်းနှစ်ခုမြှောက်တဲ့ Function ကို Regular နဲ့ Lambda syntax သုံးပြီး Console ထဲမှာ ရေးကြည့်ပါမယ်။

```py
# Regular function
def multiply(a, b):
    return a * b

# Lambda function
multi = lambda a, b: a * b

multiply(3, 4)    # 12
multi(4, 5)        # 20
```

Lambda keyword က Function object တစ်ခုကို ထုတ်ပေးပါတယ်။ အပေါ်ကကုဒ်မှာ ဆိုရင် ရလာတဲ့ Function object ကို Variable တစ်ခုမှာ assign လုပ်ပြီး ခေါ်လိုက်တာ ဖြစ်ပါတယ်။

```py
type(multi)        # <class 'function'>
```

Lambda function က ပေးထားတဲ့ Expression ‌တစ်ကြောင်းကို အလုပ်လုပ်ပြီးတာနဲ့ auto return လုပ်ပေးပါတယ်။ သူ့ထဲကို တစ်ခြား Expression တွေ၊ Statement တွေ ထပ်ထည့်လို့ မရပါဘူး။ return assert စတဲ့ Statement တွေ ထည့်လိုက်ရင် Syntax error ပြပါတယ်။

အပေါ်က နမူနာကုဒ်လို Variable မှာ assign လုပ်ပြီး ခေါ်တာက Function ကို တစ်ကြောင်းတည်းနဲ့ ချုံ့လိုက်တာ ဖြစ်ပေမယ့် တစ်ကယ့် Program တွေမှာတော့ ဒီနည်းကို မသုံးကြပါဘူး။

Lambda တွေက Identifier တွေ မလိုတဲ့ Function ဖြစ်လို့ define လုပ်ပြီးတာနဲ့ ‌တိုက်ရိုက်ခေါ်သုံးလို့ ရပါတယ်။

```py
(lambda x: x*x)(5)        # 25
(lambda a,b: a+b)(2,8)    # 10
(lambda x,y: x>y)(7,2)    # True
```

Lambda က Function object ကို ထုတ်ပေးလို့ သာမန် Function တွေ ခေါ်သလို နောက်မှာ Argument တွေ ထည့်ပြီး တန်းသုံးလို့ ရပါတယ်။ ဒီလို Function တွေကို ချက်ချင်းခေါ်သုံးတဲ့ ပုံစံကို Immediately Invoked Function Expression (IIFE) လို့ ခေါ်ပါတယ်။ Python မှာ မသုံးကြပေမယ့် JavaScript မှာ ဒီလိုပုံစံ အသုံးများပါတယ်။

## Usages of Lambda Functions

Lambda ကို သုံးပြီး Function တွေကို အတိုကောက် ရေးနိုင်ပေမယ့် နေရာတိုင်းမှာ သုံး‌နေရင် Code readibility ကို ထိခိုက်လာနိုင်ပါတယ်။ တစ်ခါတစ်ရံမှာ ကုဒ်နှစ်ကြောင်းလောက် ချုံ့ဖို့အတွက် Lambda ကို သုံးမယ့် အစား Regular function တစ်ခုကို ရေးလိုက်တာက နောင်တစ်ချိန်မှာ ကိုယ့်အတွက် ပိုပြီး အကျိုးရှိနိုင်ပါတယ်။ ပုံမှန်အားဖြင့်တော့ Lambda တွေကို ရိုးရှင်းတဲ့ Operation တွေ လုပ်တဲ့ အခါနဲ့ Function object တွေ လိုအပ်တဲ့ အခါမှာ သုံးကြပါတယ်။ ဒီနေရာမှာ Lambda function တွေကို ထိထိရောက်ရောက် အသုံးပြုနိုင်တဲ့ ပုံစံတွေကို ဖော်ပြပေးပါမယ်။

### 1. filter() Function

```py
num = [1,2,3,4,5,6,7,8,9]

# Function to check item
def is_odd(x):
    return x%2 != 0

list(filter(is_odd, num))    # [1,3,5,7,9]

# Using lambda function
list(filter(lambda x: x%2==0, num))    # [2,4,6,8]
```

filter() function က Iterable object တစ်ခုကနေ ကိုယ်လိုချင်တဲ့ Condition နဲ့ ကိုက်ညီတဲ့ Item တွေကို ပြန်ထုတ်ပေးပါတယ်။ filter() function ထဲကို Argument ‌အနေနဲ့ Condition စစ်မယ့် Function နဲ့ စစ်ရမယ့် Iterable ကို ထည့်ပေးရပါတယ်။ ဒီနေရာမှာ လိုအပ်တဲ့ Function က ရိုးရှင်းတဲ့ Expression တစ်ခုပဲ ပါတာ ဖြစ်သလို တစ်ခြားနေရာမှာ ထပ်သုံးဖို့လည်း မလိုသလောက်ဖြစ်ပါတယ်။ ဒီအတွက် Function ကို သပ်သပ် define လုပ်နေမယ့် အစား Lambda function တစ်ခုကို ထည့်ပေးနိုင်ပါတယ်။

### 2. map() Function

```
even = [2, 4, 6, 8]

# Squaring all items
list(map(lambda a: a*a, even))    
# [4,16,36,64]

# Multiplying all items by 10
list(map(lambda a: a*10, even)) 
# [20,40,60,80]
```

map() function က List ထဲက Item တစ်ခုစီကို ပေးထားတဲ့ Function ထဲမှာ run ပေးပါတယ်။ သူ့ထဲကိုလည်း လုပ်ဆောင်ရမယ့် Expression ကို Lambda နဲ့ ထည့်ပြီး အသုံးပြုကြပါတယ်။

### 3. sorted() Function

```py
langs = ['python','javascript','php','java']

# Normal Sort
sorted(langs)    
# ['java', 'javascript', 'php', 'python']

# Sort by String Length
sorted(langs, key=lambda x: len(x))
# ['php', 'java', 'python', 'javascript']

# Sort by Last Character
sorted(langs, key=lambda x: x[-1])
# ['java', 'python', 'php', 'javascript']
```

sorted() function ကို သုံးတဲ့ နေရာမှာ Key function အနေနဲ့ Lambda ကို သုံးကြပါတယ်။ အပေါ်က နမူနာမှာ ဆိုရင် List တစ်ခုကို ကိုယ်လိုသလို စီနိုင်ဖို့အတွက် Lambda function နဲ့ Sort order ကို ပြောင်းလဲထားပါတယ်။

### 4. reduce() Function

```py
from functools import reduce 

reduce(lambda x, y: x + y, [1,2,3,4,5])        # 15
reduce(lambda x, y: x * y, [1,2,3,4,5])        # 120
```

functools module မှာ ပါတဲ့ reduce function က List item တွေကို တစ်ခုချင်းစီ Operation လိုက်လုပ်ပြီး ရလာတဲ့ နောက်ဆုံးရလဒ်ကို ထုတ်ပေးပါတယ်။ ဒီမှာလည်း Function ကို Lambda အနေနဲ့ ထည့်သုံးနိုင်ပါတယ်။

### 5. Returning Function Objects

Function တွေကို return လုပ်ပေးတဲ့ Higher Order Function တွေမှာလည်း Lambda တွေကို သုံးနိုင်ပါတယ်။

```py
def to_exponent(n):
    return lambda x: x**n

square = to_exponent(2)
cube = to_exponent(3)
exp5 = to_exponent(5)

square(10)     # 100
cube(4)        # 64
exp5(2)        # 32
```

Lambda တွေကလည်း သာမန် Nested function တွေလို Lexical scope ထဲမှာ အလုပ်လုပ်ပါတယ်။ ဒါကြောင့် သူ့ကို define လုပ်ထားတဲ့ Scope ထဲမှာ ရှိတဲ့ တန်ဖိုးတွေကို ယူသုံးလို့ ရပါတယ်။ ဒီနမူနာမှာ ဆိုရင် to_exponent Function ထဲမှာ ရှိတဲ့ exponent variable n ကို Lambda ထဲမှာ ဆက်ပြီး သုံးထားတာကို တွေ့ရမှာပါ။

Function object တွေကို ထုတ်ပေးတာ၊ ဒါမှမဟုတ် Argument အဖြစ်လက်ခံတာတွေ လုပ်တဲ့ Function တွေကို Higher Order Function လို့ခေါ်ပါတယ်။ map() filter() စတဲ့ function တွေကလည်း Higher Order Function တွေပါ။

## Summary

- Lambda function တွေက နာမည်မလိုတဲ့ Anonymous function တွေပါ။
- Lambda ထဲမှာ Expression တစ်ကြောင်းသာ ထည့်လို့ရပါတယ်။ Statement တွေကို လက်မခံပါဘူး။
- Lambda က Expression ကနေ ရလာတဲ့ Result ကို auto return လုပ်ပေးပါတယ်။
- Lambda function တွေကို Function object လိုအပ်တဲ့ Higher order function တွေမှာ အသုံးများပါတယ်။
- Lambda ကို Complex expression တွေနဲ့ တွဲမသုံးသင့်ပါဘူး။

ဒီ Post မှာတော့ Lambda function တွေရဲ့ အခြေခံ သဘောတရားနဲ့ အသုံးပြုပုံတွေကို ဖော်ပြခဲ့တာ ဖြစ်ပါတယ်။ အခုဆိုရင် Lambda Function တွေကို လက်တွေ့ကျကျနဲ့ အကျိုးရှိအောင် အသုံးချနိုင်မယ်လို့ မျှော်လင့်ပါတယ်။



