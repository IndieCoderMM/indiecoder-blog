---
title: "Essential Window Commands for Programmers"
subtitle: "Learn the Key Commands to Save Time and Simplify Workflow"
date: "2022-01-02"
lang: "mm"
---

Command line ဆိုတာက Window ရဲ့ Operating system ကို တိုက်ရိုက်ချိတ်ဆက်ပြီး အလုပ်လုပ်တဲ့ ကုဒ်တွေပါ။ Window မျက်နှာပြင်ပေါ်မှာ မြင်နေရတဲ့ Icon တွေ၊ Folder တွေကို Graphical User Interface (GUI) လို့ခေါ်ပါတယ်။ ကိုယ်လုပ်ချင်တဲ့ လုပ်‌ဆောင်ချက် ကို Mouse သုံးပြီး GUI ကနေတစ်ဆင့်  အသုံးပြုရပါတယ်။ Command line ‌တွေက Mouse နဲ့ သုံးရတဲ့ လုပ်ငန်းမှန်သမျှကို ပိုပြီး မြန်ဆန်စွာနဲ့ လုပ်ဆောင်နိုင်တဲ့ အပြင် GUI ကနေ လုပ်ခွင့်ပေးမထားတဲ့ လုပ်ငန်းတွေကိုပါ အသုံးပြုနိုင်ပါတယ်။ 

Programming basics တွေကို လေ့လာခါစမှာ Command တွေကို သုံးစရာမလိုသေးပေမယ့် နောင် Development ပိုင်းတွေ လုပ်တဲ့ အခါမှာတော့ မဖြစ်မနေသုံးလာရမှာပါ။ ဒါကြောင့် Programmer တွေ သိထားသင့်တဲ့ Command တွေနဲ့ အခြားအသုံးဝင်တဲ့ Command  အချို့ကို ဖော်ပြပေးလိုက်ပါတယ်။

<details>

<summary>Table of Contents</summary>

- [Opening Command Prompt](#opening-command-prompt)
- [Working with Directory](#working-with-directory)
- [Managing files](#managing-files)
- [Getting Information](#getting-information)
- [Tips \& Tricks](#tips--tricks)
- [Conclusion](#conclusion)


</details>

## Opening Command Prompt

Command line တွေ ရေးရတဲ့ နေရာကို Command prompt လို့ခေါ်ပါတယ်။ Search box မှာ cmd လို့ ရိုက်လိုက်ရင် Command prompt app ပေါ်လာပါလိမ့်မယ်။ အဲဒီမှာ ဒီအတိုင်းဖွင့်တာနဲ့ Administrator အနေနဲ့ ဖွင့်တာဆိုပြီး နှစ်မျိုးရှိပါတယ်။ တစ်ချို့ Command တွေက ကန့်သတ်ထားလို့ Admin အနေနဲ့ ဝင်သုံးမှ အလုပ်လုပ်ပါတယ်။ Command prompt ဖွင့်နည်းနောက်တစ်နည်း ကတော့ Window key နဲ့ R ကို တွဲနှိပ်ပြီး ပေါ်လာတဲ့ Run box မှာ cmd လို့ရိုက်ပြီး ဖွင့်တာပါ။

## Working with Directory

Directory ဆိုတာက Folder ကို နောက်တစ်မျိုးခေါ်တာပါ။ Command prompt ကို ဖွင့်လိုက်ရင် ကိုယ်ရောက်နေတဲ့ Directory ကို prompt အနေနဲ့ တွေ့ရမှာပါ။ Directory တွေနဲ့ ဆက်စပ်ပြီး သုံးရတဲ့ command တွေကို ဖော်ပြပါမယ်။

Folder တစ်ခုထဲမှာ ပါတဲ့ အရာတွေကို ကြည့်ချင်ရင် Dir command ကို သုံးရပါတယ်။

```sh
dir myFolder
```

ဒီလိုရေးလိုက်ရင် ပေးထားတဲ့ Directory ထဲက File နဲ့ Folder တွေကို ပြပေးမှာပါ။ နောက်မှာ Folder name ထည့်မပေးရင် လက်ရှိ Directory ထဲမှာပါတာတွေကို ပြပါတယ်။ တစ်ခြား Directory တစ်ခုထဲကို ဝင်ချင်ရင် cd command နောက်မှာ သွားချင်တဲ့ နေရာကို ထည့်ပေးရပါမယ်။

```sh
cd c:/users/username/pictures
```

ဒီလို Path အပြည့်အစုံထည့်လိုက်ရင် ကိုယ်ရောက်နေတဲ့ နေရာကနေ တိုက်ရိုက်တန်းသွားမှာပါ။ Dir ရိုက်ကြည့်လို့ ပေါ်လာတဲ့ Folder တွေကိုတော့ နာမည်ရိုက်ပေးရုံနဲ့ တန်းဝင်လို့ ရပါတယ်။

အပေါ်ကလို Path အပြည့်အစုံ မရိုက်ပဲနဲ့  Directory တစ်ခုထဲမှာ Command prompt တန်းဖွင့်ချင်တယ်ဆိုရင်တော့ GUI ထဲကနေ Directory ထဲကို ဝင်ပြီး Directory path ကို ပြတဲ့ Title bar ထဲမှာ cmd.exe ဆိုပြီး ရိုက်လိုက်ပါ။ အဲဒီ Directory ထဲမှာ Command prompt တန်းပွင့်လာပါလိမ့်မယ်။

ကိုယ်ရောက်နေတဲ့ နေရာကနေ ပြန်ထွက်ချင်ရင် ဒီလို ရေးရပါတယ်။

```sh
cd ..
```

Folder အသစ်ဖွင့်ချင်ရင် mkdir command ကို သုံးရပါတယ်။

```sh
mkdir foldername
```

Drive ပြောင်းချင်ရင် ပြောင်းချင်တဲ့ Drive ရဲ့ စာလုံးကို colon နဲ့ တွဲပြီး ရေးပေးလိုက်ပါ။

```sh
d:
e:
```

## Managing files

File တွေကို တစ်နေရာကနေ တစ်နေရာ ကူးဖို့ အတွက် ကူးချင်တဲ့ File နဲ့ ကူးရမယ့်နေရာကို Copy command နောက်မှာ ထည့်ရေးရပါတယ်။

```sh
copy "c:/note.txt" "d:/notes"
```

File နေရာရွှေ့ချင်တယ်ဆိုရင်လည်း Move command ကို ဒီပုံစံအတိုင်း သုံးရပါတယ်။

```sh
move "d:/notes/note.txt" "e:/"
```

Move ကို File နာမည်ပြောင်းဖို့ အတွက်လည်း သုံးနိုင်ပါတယ်။  နေရာတစ်ခုထဲမှာပဲ File ကို နာမည်အသစ်ဆီ ရွှေ့လိုက်တာပါ။

```sh
move "e:/note.txt" "e:/new.txt"
```

File တွေကို Encrypt လုပ်ချင်တယ်ဆိုရင် အဲဒီ File ရှိတဲ့ Directory ထဲကို သွားပြီး အောက်က Command ကို ရေးလိုက်ပါ။ ပြန်ပြီး Decrypt လုပ်မယ်ဆိုရင် /e အစား /d လို့ ပြောင်းရေးရပါမယ်။

```sh
cipher /e
cipher /d
```

ကိုယ်က Program တစ်ခုကို Version နှစ်ခုနဲ့ ရေးထားပြီး နှစ်ခုဘာတွေ ကွာသွားလဲ သိချင်ရင် File နှစ်ခုကို Compare လုပ်ကြည့်နိုင်ပါတယ်။

```sh
fc mygameV1.py mygameV2.py
```

Folder တစ်ခုကို ဖျောက်ထားဖို့ အတွက်  Attribute command ကို သုံးနိုင်ပါတယ်။

```sh
attrib +h +s +r myFolder
```

ဖျောက်ထားတဲ့ File ကို ပြန်ပေါ်စေချင်ရင်တော့ အောက်ပါအတိုင်း ပြန်ရေးပေးလိုက်ပါ။

```sh
attrib -h -s -r myFolder
```

## Getting Information

ကွန်ပျူတာရဲ့ စနစ်ပိုင်းဆိုင်ရာ အချက်အလက်တွေ ကြည့်လို့ ရတဲ့ Command အချို့ကို အောက်မှာ ဖော်ပြပေးထားပါတယ်။

1. `systeminfo` : ကွန်ပျူတာရဲ့ Version Model စတဲ့ System ပိုင်းဆိုင်ရာတွေကို သိချင်ရင် သုံးရပါတယ်။
2. `driverquery` : ကွန်ပျူတာထဲမှာ ထည့်ထားတဲ့ Drive တွေကို သိချင်ရင် Driverquery ကို သုံးရပါတယ်။
3. `tasklist` : အခုလက်ရှိ run နေတဲ့ Program တွေကို ပြပေးပါတယ်။
4. `powercfg /batteryreport` : Battery အသုံးပြုမှုနဲ့ ပတ်သက်တဲ့ အချက်အလက်တွေကို HTML အဖြစ် ထုတ်ပေးပါတယ်။

## Tips & Tricks

Command တစ်ခုရဲ့ အလုပ်လုပ်ပုံကို သိချင်ရင် command နောက်မှာ /? ရိုက်ပေးလိုက်ပါ။ အဲဒီ Command ကို ဘယ်လိုသုံးရမလဲဆိုတာ အပြည့်အစုံ ကျလာပါလိမ့်မယ်။

```sh
attrib /?
```

System information တွေကို Command prompt မှာ တိုက်ရိုက်မကြည့် ပဲ File တစ်ခုမှာ သိမ်းထားလို့ရပါတယ်။ ဉပမာ- Drive ‌စာရင်းကို Documents မှာ သိမ်းချင်တယ်ဆိုရင် အောက်ပါအတိုင်း ရိုက်လိုက်ပါ။

```sh
driverquery > documents/drivers.txt
```

ကိုယ်ရေးထားတဲ့ command line တွေ အကုန်ဖျက်ချင်ရင် cls လို့ ရိုက်လိုက်ပါ။

```sh
cls
```

ကွန်ပျူတာကို Command prompt ကနေပဲ ပိတ်လို့ ရပါတယ်။ 

```sh
shutdown /s
```

Restart လုပ်ချင်ရင် /s အစား /r လို့ ပြောင်းရေးလိုက်ပါ။ Shutdown လုပ်ထားတာကို Cancel ချင်ရင် /a ကို သုံးရပါတယ်။ ကွန်ပျူတာကို တစ်နာရီကြာမှ ပိတ်ချင်တယ်ဆိုရင် ဒီလို ရေးရပါတယ်။

```sh
shutdown /s /t 3600
```

တစ်ချို့ command တွေက Admin အဖြစ်နဲ့ Run မှ အလုပ်လုပ်ပါတယ်။ အဲဒီ command တွေ သုံးဖို့လိုလာရင် Command prompt ထဲမှာပဲ  Administrator အဖြစ် နောက် Command window တစ်ခု ထပ်ဖွင့်လို့ရပါတယ်။

```sh
powershell start cmd -v runAs
```

Website တစ်ခုရဲ့ IP Address ကို ကြည့်ချင်ရင် Ping command ကို သုံးနိုင်ပါတယ်။

```sh
ping www.website.com
```

Command window ရဲ့ နောက်ခံအရောင်နဲ့ စာလုံးအရောင်တွေ ပြောင်းချင်ရင် color /? လို့ ရိုက်လိုက်ပါ။ ကျလာတဲ့ အထဲက Color value တွေကို သုံးပြီး ပြောင်းရပါတယ်။ နောက်ခံအပြာပေါ်မှာ အစိမ်းနုရောင်နဲ့ ရေးချင်ရင် အောက်ပါအတိုင်း ရိုက်ရပါမယ်။

```sh
color 1a
```

Command window ရဲ့ ခေါင်းစဉ်ကို ပြောင်းချင်ရင် Title command ကို သုံးရပါတယ်။

```sh
title New CMD
```

Prompt မှာပေါ်နေမယ့် စာကို ပြောင်းချင်ရင် Prompt command နဲ့ ပြောင်းနိုင်ပါတယ်။ နောက်က Dollar sign ($) နဲ့ ရေးထားတာတွေက Special code တွေပါ။ သုံးလို့ ရတဲ့ code တွေကို /? သုံးပြီး ကြည့်နိုင်ပါတယ်။

```sh
prompt hello$t$d$$
```

Command prompt ရဲ့ Font Layout Color စတာတွေကို ကိုယ်ကြိုက်သလို ပြောင်းချင်ရင် Title bar ကို Right click နှိပ်ပြီး Properties ထဲမှာ ဝင်ပြောင်းနိုင်ပါတယ်။

## Conclusion

ဒီ Post မှာ‌တော့ အသုံးဝင်တဲ့ Window command အချို့ကို ဖော်ပြပေးခဲ့တာပါ။Command Prompt ကို ကျွမ်းကျင်စွာ သုံးနိုင်ဖို့ဆိုရင် ဒီအခြေခံတွေကို ထိထိရောက်ရောက် သုံးနိုင်အောင် လေ့ကျင့်ထားဖို့ လိုပါတယ်။ Command တွေကို အခက်အခဲမရှိ သုံးနိုင်လာမယ်ဆိုရင် ကိုယ့်ရဲ့ Programming workflow က သိသိသာသာ တိုးတက်ပြောင်းလဲ လာမှာပါ။
