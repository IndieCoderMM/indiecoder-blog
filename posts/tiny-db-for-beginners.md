---
title: "How to Use TinyDB: A Practical Tutorial"
subtitle: "A Beginner's Guide to Learning Database Operations with TinyDB"
date: "2021-02-28"
language: "mm"
tags: ['database', 'python']
---

ကိုယ်ပိုင် Project တွေ ရေးတဲ့အခါမှာ Data တွေကို သိမ်းဖို့ လိုလာတတ်ပါတယ်။ ဒီလိုအခါမှာ SQL လို database တစ်ခုကို သုံးလို့ရပေမယ့် ဒါတွေက Beginner တွေအတွက်တော့ သုံးဖို့ သိပ်မလွယ်ကူပါဘူး။ ကိုယ်က Data အများကြီး သိမ်းစရာမလိုရင် ရိုးရှင်းတဲ့ TinyDB ကို သုံးလိုက်တာက ကိုယ့်အလုပ်ကို ပိုပြီး လွယ်ကူမြန်ဆန်စေပါတယ်။ ဒီ Post မှာတော့ Beginner တွေ အတွက် အသင့်တော်ဆုံး Database တစ်ခုဖြစ်တဲ့ TinyDB ကို ဘယ်လိုသုံးရမလဲဆိုတာကို ပြောပြသွားမှာပါ။

<details>

<summary>Table of Contents</summary>

- [What is TinyDB?](#what-is-tinydb)
- [Installing TinyDB](#installing-tinydb)
- [CRUD in TinyDB](#crud-in-tinydb)
- [Inserting Data](#inserting-data)
- [Getting data](#getting-data)
- [Updating data](#updating-data)
- [Removing data](#removing-data)
- [Conclusion](#conclusion)


</details>

## What is TinyDB?

TinyDB က Python dictionary လို Document တွေကို သိမ်းတဲ့ Database တစ်ခုပါ။ သူ့ကို Python သီးသန့်နဲ့ ရေးထားတာဖြစ်ပြီး တစ်ခြား database တွေလို external server တွေ၊ configuration လုပ်စရာတွေ မလိုပါဘူး။ လွယ်လွယ်ကူကူ သုံးနိုင်အောင် ဖန်တီးထားတာဖြစ်လို့ Database တွေနဲ့ ရင်းနှီးမှု မရှိသေးတဲ့ Beginner တွေတောင်မှ အချိန်အနည်းငယ်ပေးပြီး လေ့လာရုံနဲ့ ကျွမ်းကျင်နိုင်ပါတယ်။ 

တကယ်လို့ ကိုယ်က advanced feature ‌တွေ၊ high performance တွေ လိုချင်တယ်ဆိုရင်တော့ TinyDB ကို မသုံး သင့်ပါဘူး။ တကယ့် Database တွေ ဖြစ်တဲ့ SQLite, MongoDB, NoSQL စတာတွေကိုပဲ ရွေးချယ်သင့်ပါတယ်။ TinyDB က ကိုယ်ပိုင် Project တွေအတွက် ရိုးရှင်းတဲ့ Data အနည်းငယ်ကို သိမ်းဖို့ပဲ သင့်တော်ပါတယ်။

## Installing TinyDB

TinyDB ကို install လုပ်ဖို့ အတွက် Command prompt ကို ဖွင့်ပြီး `pip install tinydb` လို့ run လိုက်ပါ။ လိုအပ်တဲ့ package ကို ဒေါင်းပါလိမ့်မယ်။ ကွန်ပျူတာမှာ Internet connection ရှိဖို့လိုပါတယ်။

## CRUD in TinyDB

TinyDB ကို install လုပ်ပြီးပြီ ဆိုရင် Database တွေရဲ့ အခြေခံလုပ်ဆောင်ချက်တွေ ဖြစ်တဲ့ CRUD လုပ်နည်းကို လေ့လာကြပါမယ်။ CRUD ဆိုတာ Create, Read, Update, Delete ရဲ့ အတိုကောက်ပါ။ Data တွေကို သိမ်းတာ၊ ထုတ်တာ၊ ပြောင်းလဲတာ၊ ဖျက်တာတွေကို လုပ်ကြည့်ပါမယ်။

အရင်ဆုံး Code editor ကို ဖွင့်ပြီး tinydb ကနေ ကိုယ်သုံးမယ့် class တွေကို import လုပ်ပါမယ်။

```py
from tinydb import TinyDB, Query
db = TinyDB('mydb.json')
```

TinyDB  class တစ်ခုကို ယူပြီး filename ထည့်ပေးလိုက်ပါတယ်။ ဒီမှာဆိုရင် mydb ဆိုတဲ့ JSON file ထဲမှာ data တွေကို သိမ်းမှာပါ။

## Inserting Data

Data တွေကို သိမ်းတဲ့ အခါမှာ Python dictionaryအဖြစ်ထည့်ပြီး သိမ်းရပါမယ်။

```py
user1 = {'name': 'Jim', 'age': 25, 'country': 'USA'}
db.insert(user1)
```

ဒါက insert-method ကိုသုံးပြီး database ထဲကို user ဆိုတဲ့ dictionary ထည့်လိုက်တာပါ။ ဒီကုဒ်ကို run လိုက်ရင် Directory ထဲမှာ mydb.json ဆိုပြီး file တစ်ခုပေါ်လာပါမယ်။ အဲဒီ file ထဲမှာ data ကို အောက်ပါအတိုင်း သိမ်းထားပါလိမ့်မယ်။

```py
{"_default": {"1": {"name": "Jim", "age": 25, "country": "USA"}}}
```

_default ဆိုတာက table ရဲ့ နာမည်ပါ။ 1 ကတော့ ထည့်လိုက်တဲ့ data ရဲ့ id ပါ။ data တွေကို dictionary ပုံစံနဲ့ သိမ်းထားတာ ဖြစ်ပါတယ်။

ဒီလို တစ်ခါတည်းနဲ့ item အများကြီး ထည့်လို့ရပါတယ်။

```py
users = [
	{'name': 'Tom', 'age': 30, 'country': 'UK'},
	{'name': 'May', 'age': 27, 'country': 'USA'},
	{'name': 'Bob', 'age': 55, 'country': 'Italy'},
]
db.insert_multiple(users)
```

အပေါ်က insert လုပ်တဲ့ ကုဒ်တွေကို တစ်ခါ Run ပြီးသွားရင် comment ပေးပြီး ဖျောက်ထားလိုက်ပါ။ ဒီလိုဖျောက်မထားခဲ့ရင် Program run တိုင်း ဒါတွေကို Database ထဲ ထပ်ထပ်ပြီး ထည့်နေပါလိမ့်မယ်။

## Getting data

Database ထဲကနေ data တွေကို ထုတ်ဖို့ အတွက် Query instance တစ်ခုလိုပါတယ်။

```py
User = Query()
print(db.search(User.name == 'Tom'))
print(db.search(User.name == 'James'))
print(db.search(User.age >= 30))
# Output
# [{'name': 'Tom', 'age': 30, 'country': 'UK'}]
# []
# [{'name': 'Tom', 'age': 30, 'country': 'UK'}, {'name': 'Bob', 'age': 55, 'country': 'Italy'}]
```

Search-method နဲ့ ကိုယ်လိုချင်တဲ့ Item တွေကို ထုတ်နိုင်ပါတယ်။ တူတဲ့ Data မရှိရင် empty list တစ်ခုကို ထုတ်ပေးပါတယ်။

Get-method ကို သုံးပြီးလည်း Data တွေကို ရှာနိုင်ပါတယ်။

```py
print(db.get(User.country == 'UK'))
# Output
# {'name': 'Tom', 'age': 30, 'country': 'UK'}
```

Search နဲ့ Get မတူတာက get-method က တူတဲ့ item တွေရှိရင်လည်း တစ်ခုပဲ ထုတ်ပေးပါတယ်။ Search-method ကတော့ condition နဲ့ညီတဲ့ item အကုန် ထုတ်ပေးပါတယ်။

Data ရှိ၊ မရှိပဲ သိချင်ရင် contains-method ကို သုံးနိုင်ပါတယ်။

```py
print(db.contains(User.name == 'Bob'))
# Output
# True
```

Database ထဲမှာ ပါတဲ့ Item တွေ အကုန်လုံးကို all-method နဲ့ ကြည့်နိုင်ပါတယ်။

```py
print(db.all())
# Output
# [{'name': 'Jim', 'age': 25, 'country': 'USA'}, {'name': 'Tom', 'age': 30, 'country': 'UK'}, {'name': 'May', 'age': 27, 'country': 'USA'}, {'name': 'Bob', 'age': 55, 'country': 'Italy'}]
```

Item တွေကို တစ်ခုချင်းထုတ်ချင်ရင် for-loop နဲ့ iterate လုပ်နိုင်ပါတယ်။

```py
for user in db:
	print(user['name'], user['age'])
# Output
# Jim 25
# Tom 30
# May 27
# Bob 55
```

သိမ်းထားတဲ့ item အရေအတွက်ကို သိချင်ရင် len-function ကို သုံးနိုင်ပါတယ်။

```py
print(len(db))
# Output
# 4
```

## Updating data

ရှိပြီးသား item ထဲကို data တွေကို ထပ်ထည့်ချင်ရင် update-method ကို သုံးရပါတယ်။ Item အကုန်လုံးကို update လုပ်မှာဆိုရင် နောက်က condition ထည့်စရာမလိုပါဘူး။

```py
db.update({'country': 'Canada'}, User.name == 'May')
db.update({'job': 'programmer'})
for user in db:
	print(user)
# Output
# {'name': 'Jim', 'age': 25, 'country': 'USA', 'job': 'programmer'}
# {'name': 'Tom', 'age': 30, 'country': 'UK', 'job': 'programmer'}
# {'name': 'May', 'age': 27, 'country': 'Canada', 'job': 'programmer'}
# {'name': 'Bob', 'age': 55, 'country': 'Italy', 'job': 'programmer'}
```

တစ်ခါတစ်ရံမှာ data ကို update ကော၊ insert ကော လုပ်ဖို့လိုလာပါတယ်။ အဲဒီအခါမှာ Upsert-method ကို သုံးရပါတယ်။

```py
db.upsert({'login': True}, User.name == 'Jim')
db.upsert({'name': 'Ben', 'login': True}, User.name == 'Ben')
for user in db:
	print(user)
# Output
# {'name': 'Jim', 'age': 25, 'country': 'USA', 'job': 'programmer', 'login': True}
# {'name': 'Tom', 'age': 30, 'country': 'UK', 'job': 'programmer'}
# {'name': 'May', 'age': 27, 'country': 'Canada', 'job': 'programmer'}
# {'name': 'Bob', 'age': 55, 'country': 'Italy', 'job': 'programmer'}
# {'name': 'Ben', 'login': True}
```

Upsert-method က query နဲ့ ကိုက်တဲ့ item ရှိရင် update လုပ်ပြီး မရှိရင် ပေးထားတဲ့ Dictionary နဲ့ item အသစ် လုပ်ပေးပါတယ်။

## Removing data

Remove-method ကို သုံးပြီး Item တွေကို ဖျက်ရပါတယ်။ Condition ပေးပြီး ဖျက်လို့ရသလို Item ရဲ့ document id ကို သုံးပြီးလည်း ဖျက်နိုင်ပါတယ်။ Document id နဲ့ ဖျက်မယ်ဆိုရင် id တွေကို list နဲ့ထည့်ပေးရပါတယ်။

```py
db.remove(User.name == 'Jim')
db.remove(doc_ids = [5])
for user in db:
	print(user)
# Output
# {'name': 'Tom', 'age': 30, 'country': 'UK', 'job': 'programmer'}
# {'name': 'May', 'age': 27, 'country': 'Canada', 'job': 'programmer'}
# {'name': 'Bob', 'age': 55, 'country': 'Italy', 'job': 'programmer'}
```

Database ထဲက Data တွေ အကုန်လုံးကို ဖျက်ပြီး အသစ်က ပြန်စချင်တယ်ဆိုရင် truncate-method ကို သုံးရပါတယ်။

```py
db.truncate()
print(db.all())
# Output
# []
```

## Conclusion

ဒီ Post မှာ ပြောခဲ့တာကတော့ TinyDB ရဲ့ အခြေခံအလုပ်လုပ်ပုံတွေပဲ ဖြစ်ပါတယ်။ ဒီထက်ပိုအဆင့်မြင့်တဲ့ လုပ်ဆောင်ချက်တွေကို အသေးစိတ်သိချင်တယ်ဆိုရင် [Welcome to TinyDB! — TinyDB 4.7.0 documentation](https://tinydb.readthedocs.io/en/latest/index.html) မှာ ဝင်ရောက်လေ့လာနိုင်ပါတယ်။ ဒါဆိုရင် Project တွေမှာ Database တစ်ခုသုံးဖို့လိုအပ်လာပြီဆိုရင် လွယ်ကူရိုးရှင်းတဲ့ TinyDB ကို သုံးပြီး အကောင်းဆုံး Project တွေ ဖန်တီးနိုင်ကြမယ်လို့ ယုံကြည်ပါတယ်။
