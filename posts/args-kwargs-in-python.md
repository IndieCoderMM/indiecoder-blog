---
title: "Python Beyond Basics: Understanding *args and **kwargs"
subtitle: "Dynamic Arguments and Keyword Arguments in Python Functions"
date: "2022-03-16"
language: "mm"
tags: ['functional', 'python']
---

Python program တွေကို လေ့လာတဲ့အခါ တစ်ချို့ Function definition တွေမှာ *args နဲ့ **kwargs ဆိုပြီး Parameter နှစ်ခုကို တွေ့ရတတ်ပါတယ်။ ဒီ Post မှာတော့ *args နဲ့ **kwargs က ဘာတွေလဲ၊ သူတို့ကို ဘယ်လိုသုံးရမလဲ ဆိုတာတွေကို ပြောပြပေးမှာပါ။

<details>

<summary>Table of Contents</summary>

- [What are \*args and \*\*kwargs?](#what-are-args-and-kwargs)
- [Forwarding \*args \& \*\*kwargs](#forwarding-args--kwargs)
- [Unpacking Operators ( \* ) \& ( \*\* )](#unpacking-operators-------)
- [Conclusion](#conclusion)

</details>

## What are *args and **kwargs?

Function တစ်ခုကို Define လုပ်တဲ့ အခါမှာ လိုအပ်တဲ့ Parameter တွေကို တစ်ခါတည်း သတ်မှတ်ထားရပါတယ်။ ကိုယ်ထည့်ချင်တဲ့ Argument အရေအတွက်ကို သေချာမသိတဲ့ အခါ၊ ဒါမှမဟုတ် Argument တွေ၊ Keyword argument တွေ အများကြီးထည့်ချင်တဲ့ အခါမှာ *args နဲ့ **kwargs ကို သုံးနိုင်ပါတယ်။

```py
def about_me(name, fav_lang):
	print(f"Hello, My name is {name}.")
	print(f"My favourite language: {fav_lang}.")
	print("That's all about me.")

about_me("Johnny", "HTML")

# OUTPUT
# Hello, My name is Johnny.
# My favourite language is HTML.
# That's all about me.
```

ဒီနမူနာမှာဆိုရင် name နဲ့ fav_lang ဆိုပြီး Required ‌argument နှစ်ခုပါပါတယ်။ Function call မှာ Argument တစ်ခုခု ပိုနေရင်၊ လိုနေရင် Error ပြမှာပါ။

ကိုယ်က တစ်ခြား Argument တွေထပ်ထည့်ချင်တယ်၊ ဒါပေမယ့် အရေအတွက်ကိုလည်း သေချာမသိရင် *args ကို သုံးနိုင်ပါတယ်။ အောက်က နမူနာမှာဆိုရင် *args ကို Argument အဖြစ်ထည့်ထားတဲ့ အတွက် Function call မှာ နောက်ထပ် Argument တွေ လိုသလောက်ထပ်ထည့်လို့ ရသွားပါတယ်။

```py
def about_me(name, fav_lang, *args):
    print(f"Hello, My name is {name}.")
    print(f"My favourite language is {fav_lang}.")
    if args:
        print("I also use these languages: ", args)
    else:
        print("That's the only language I use.")
    print("That's all about me.")

about_me("Johnny", "HTML", "JS", "Python", "CSS")

# OUTPUT
# Hello, My name is Johnny.
# My favourite language is HTML.
# I also use these languages:  ('JS', 'Python', 'CSS')
# That's all about me.
```

*args က ထည့်ပေးလိုက်တဲ့ အပို variable တွေကို Tuple အဖြစ် ပြောင်းပြီး Function ထဲကို ပို့ပေးပါတယ်။ သူက Optional argument ပါ။ ကြိုက်သလောက်ထပ်ထည့်လို့ ရသလို ဘာမှထည့်မပေးလည်းရပါတယ်။ Function ထဲမှာဆိုရင် args ကို Tuple တစ်ခုလို အသုံးပြုနိုင်ပါတယ်။ Function ထဲမှာ သုံးတဲ့ အခါ ( * ) သင်္ကေတကို ထည့်စရာမလိုတော့ပါဘူး။

**kwargs ကလည်း *args နဲ့ အလုပ်လုပ်ပုံ အတူတူပါပဲ။ သူ့ကိုတော့ Keyword argument တွေ ပေးချင်တဲ့ အခါ သုံးပါတယ်။ Keyword argument ဆိုတာ Argument တွေကို နာမည်ပေးပြီး Function ထဲကို ထည့်လိုက်တာပါ။

```py
def contact_me(phone, **kwargs):
    print(f"My number is {phone}")
    if kwargs:
        print("You can also contact me at:")
        for k,v in kwargs.items():
            print(k, ':', v)

contact_me(9123, email="jny75@gmail.com", facebook="John Wayne")

# OUTPUT
# My number is 9123
# You can also contact me at:
# email : jny75@gmail.com
# facebook : John Wayne
```

**kwargs က ထည့်ပေးလိုက်တဲ့ Argument name နဲ့ value တွေကို တွဲပြီး Dictionary တစ်ခုအဖြစ်ပြောင်းပေးပါတယ်။ Function ထဲရောက်သွားရင် kwargs ကို Dictionary တစ်ခုအတိုင်း အသုံးပြုနိုင်ပါတယ်။

## Forwarding *args & **kwargs

Function တစ်ခုကနေ တစ်ခုကို *args နဲ့ **kwargs ကို ‌ပို့ပေးလို့ ရပါတယ်။ ဒါကြောင့် နောက် Function ထဲကို မထည့်ခင်မှာ သူတို့ရဲ့ တန်ဖိုးတွေကို အပြောင်းအလဲ လုပ်နိုင်ပါတယ်။

နမူနာအနေနဲ့ အပေါ်က about_me-function ကို ဒီလို ပြန်ရေးပါမယ်။ ဒီမှာဆိုရင် kwargs ကို နောက် Function ထဲမထည့်ခင်မှာ Modify လုပ်ထားတာပါ။

```py
def about_me(name, fav_lang, phone, *args, **kwargs):
    print(f"Hello, My name is {name}.")
    print(f"My favourite language is {fav_lang}.")
    if args:
        print("I also use these languages: ")
        for i, j in enumerate(args):
            print(i+1, '-', j)
    if kwargs:
				# Modifying keys in kwargs
        new_kwargs = { k.upper():v for k,v in kwargs.items() }
		# Forwarding to another function
    contact_me(phone, **new_kwargs)
    print("That's all about me.")
		
about_me("Johnny", "HTML", 23154, "JS", "Python", "CSS", email="jny75@gmail.com", facebook="John Wayne")

# OUTPUT
# Hello, My name is Johnny.
# My favourite language is HTML.
# I also use these languages: 
# 1 - JS
# 2 - Python
# 3 - CSS
# My number is 23154
# You can also contact me at:
# EMAIL : jny75@gmail.com
# FACEBOOK : John Wayne
# That's all about me.
```

ဒီလို *args နဲ့ **kwargs ကို သုံးတဲ့ အခါမှာ သူတို့ရဲ့ Order တွေကိုတော့ သတိထားရပါမယ်။ Required argument တွေကို ရှေ့ဆုံးမှာ ထားရပါတယ်။ ပြီးမှ နောက်မှာ *args **kwargs ဆိုပြီး အစဉ်အတိုင်းထားရပါတယ်။ နေရာတွေ မှားထားရင် SyntaxError တက်ပါတယ်။

## Unpacking Operators ( * ) & ( ** )

ဒီ Optional argument တွေကို အသုံးပြုလို့ ရတာက args kwargs ဆိုတဲ့ နာမည်တွေကြောင့် မဟုတ်ပါဘူး။ Unpacking operator လို့ခေါ်တဲ့ ( * ) နဲ့ ( ** ) သင်္ကေတတွေကြောင့်ပါ။ Unpacking operator တွေက Iterable object တွေဖြစ်တဲ့ List/Dictionary ထဲက Item တွေကို ခွဲထုတ်ပေးပါတယ်။

နမူနာအနေနဲ့ CSS syntax ထုတ်ပေးတဲ့ function တစ်ခုရေးကြည့်ပါမယ်။

```py
def css_generator(selector, prop, value):
    print("%s {" % selector)
    print("    %s : %s ;" % (prop, value))
    print("}")

css_generator("h1", "color", "red")

# OUTPUT
# h1 {
#     color : red ;
# }
```

css_generator-function မှာ input သုံးခုယူပါတယ်။ အဲဒီတန်ဖိုးတွေပေးလိုက်ရင် သူက CSS syntax အတိုင်း print ထုတ်ပြပါတယ်။

ကိုယ်ထည့်ပေးချင်တဲ့ Argument တွေက List ဒါမှမဟုတ် Tuple တစ်ခုခုထဲမှာ ဖြစ်နေရင် သူတို့ရဲ့ Index တွေနဲ့ ခေါ်ပြီးထည့်ပေးရမှာပါ။

```py
theme = ['body', 'background', 'green']
css_generator(theme[0], theme[1], theme[2])

# OUTPUT
# body {
#   background : green ;
# }
```

ဒီလို Argument တွေထည့်ရမယ့်နေရာမှာ ကိုယ်သုံးမယ့် List ကို ရှေ့က ( * ) သင်္ကေတခံပြီး ထည့် ပေးလိုက်ရုံပါပဲ။ Output က အတူတူ ထွက်လာမှာပါ။

```py
css_generator(*theme)

# OUTPUT
# body {
#   background : green ;
# }
```

( * ) သင်္ကေတက List, Tuple ထဲက Item တွေကို တစ်ခုစီ ခွဲထုတ်ပြီး Positional argument တွေ အဖြစ် Function ထဲကို ထည့်ပေးပါတယ်။ ဒီလိုသုံးမယ်ဆိုရင် Function က လက်ခံတဲ့ Argument အရေအတွက်နဲ့ Item အရေအတွခွဲထုတ်ပေးပါတယ်။ Dictionary key တွေကိုတော့ Function parameter နဲ့ နာမည်တူပေးထားရပါမယ်။

( ** ) သင်္ကေတက Dictionary တစ်ခုကို Keyword Argument တွေဖြစ်အောင် ခွဲထုတ်ပေးပါတယ်။ Dictionary key တွေကိုတော့ Function parameter နဲ့ နာမည်တူပေးထားရပါမယ်။

```py
myfont = {'selector':'p', 'prop':'font', 'value':'Arial'}
css_generator(**myfont)

# OUTPUT
# p {
#    font : Arial ;
# }
```

( ** ) သင်္ကေတကို Dictionary တွေ ပေါင်းတဲ့ အခါမှာလည်း ဒီလို အသုံးပြုနိုံံင်ပါတယ်။

```py
info1 = {'name':'Bob', 'age':32}
info2 = {'job':'engineer', 'ph':321456}
user = {**info1, **info2}

print(user)

# OUTPUT
# {'name': 'Bob', 'age': 32, 'job': 'engineer', 'ph': 321456}
```

## Conclusion

အခုဆိုရင် *args နဲ့ **kwargs ကို သုံးပြီး Optional argument တွေ ဘယ်လိုထည့်ရမလဲဆိုတာနဲ့ Unpacking operator တွေရဲ့ အလုပ်လုပ်ပုံတွေကို လေ့လာခဲ့တာပဲ ဖြစ်ပါတယ်။ Args နဲ့ Kwargs တွေက အရမ်းအသုံး ဝင်တဲ့ Python feature တစ်ခုပါ။ သူတို့ကို သေသေချာချာ နားလည်ထားမယ်ဆိုရင် ပိုပြီး Effective ဖြစ်တဲ့ ကုဒ်တွေ ရေးနိုင်တဲ့ Programmer တစ်ယောက်ဖြစ်လာမှာပါ။
