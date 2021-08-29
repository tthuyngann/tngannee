const textConfig = {
2
  text1: "He luu banh duc!",
3
  text2: "Em có điều này muốn hỏi anh nhớ phải trả lời thật lòng nhaaa.",
4
  text3: "Anh đang nhớ em đúng khummmm ._.",
5
  text4: "Nếu anh ko trả lời mà thoát ra em đánh nhau với anh đấy nhaaa =.=",
6
  text5: "Em mơ à???",
7
  text6: "Anh siu siu nhớ *.*",
8
  text7: "lí do anh nhớ em ikkk :vvvv",
9
  text8: "Gửi cho em <3",
10
  text9: "Vì em babi xinh cute....em là số 1 siêu đỉnh >.<",
11
  text10: "Em biết mà ^^ gitchee gitchee goo ",
12
  text11:
13
    "When i first saw u i looked for a signature, becau every masterpiece has one ^^",
14
  text12: "yayyy <3",
15
};
16
​
17
$(document).ready(function () {
18
  // process bar
19
  setTimeout(function () {
20
    firstQuestion();
21
    $(".spinner").fadeOut();
22
    $("#preloader").delay(350).fadeOut("slow");
23
    $("body").delay(350).css({
24
      overflow: "visible",
25
    });
26
  }, 600);
27
​
28
  $("#text3").html(textConfig.text3);
29
  $("#text4").html(textConfig.text4);
30
  $("#no").html(textConfig.text5);
31
  $("#yes").html(textConfig.text6);
32
​
33
  function firstQuestion() {
34
    $(".content").hide();
35
    Swal.fire({
36
      title: textConfig.text1,
37
      text: textConfig.text2,
38
      imageUrl: "img/cuteCat.jpg",
39
      imageWidth: 300,
40
      imageHeight: 300,
41
      background: '#fff url("img/iput-bg.jpg")',
42
      imageAlt: "Custom image",
43
    }).then(function () {
44
      $(".content").show(200);
45
    });
46
  }
47
​
48
  // switch button position
49
  function switchButton() {
50
    var audio = new Audio("sound/duck.mp3");
51
    audio.play();
52
    var leftNo = $("#no").css("left");
53
    var topNO = $("#no").css("top");
54
    var leftY = $("#yes").css("left");
55
    var topY = $("#yes").css("top");
56
    $("#no").css("left", leftY);
57
    $("#no").css("top", topY);
58
    $("#yes").css("left", leftNo);
59
    $("#yes").css("top", topNO);
60
  }
61
  // move random button póition
62
  function moveButton() {
63
    var audio = new Audio("sound/Swish1.mp3");
64
    audio.play();
65
    if (screen.width <= 600) {
66
      var x = Math.random() * 300;
67
      var y = Math.random() * 500;
68
    } else {
69
      var x = Math.random() * 500;
70
      var y = Math.random() * 500;
71
    }
72
    var left = x + "px";
73
    var top = y + "px";
74
    $("#no").css("left", left);
75
    $("#no").css("top", top);
76
  }
77
​
78
  var n = 0;
79
  $("#no").mousemove(function () {
80
    if (n < 1) switchButton();
81
    if (n > 1) moveButton();
82
    n++;
83
  });
84
  $("#no").click(() => {
85
    if (screen.width >= 900) switchButton();
86
  });
87
​
88
  // generate text in input
89
  function textGenerate() {
90
    var n = "";
91
    var text = " " + textConfig.text9;
92
    var a = Array.from(text);
93
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
94
    var count = textVal.length;
95
    if (count > 0) {
96
      for (let i = 1; i <= count; i++) {
97
        n = n + a[i];
98
        if (i == text.length + 1) {
99
          $("#txtReason").val("");
100
          n = "";
101
          break;
102
        }
103
      }
104
    }
105
    $("#txtReason").val(n);
106
  }
107
​
108
  // show popup
109
  $("#yes").click(function () {
110
    var audio = new Audio("sound/tick.mp3");
111
    audio.play();
112
    Swal.fire({
113
      title: textConfig.text7,
114
      html: true,
115
      width: 900,
116
      padding: "3em",
117
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
118
      background: '#fff url("img/iput-bg.jpg")',
119
      backdrop: `
120
                    rgba(0,0,123,0.4)
121
                    url("img/giphy2.gif")
122
                    left top
123
                    no-repeat
124
                  `,
125
      showCancelButton: false,
126
      confirmButtonColor: "#3085d6",
127
      cancelButtonColor: "#d33",
128
      confirmButtonColor: "#fe8a71",
129
      cancelButtonColor: "#f6cd61",
130
      confirmButtonText: textConfig.text8,
131
    }).then((result) => {
132
      if (result.value) {
133
        Swal.fire({
134
          width: 900,
135
          confirmButtonText: textConfig.text12,
136
          background: '#fff url("img/iput-bg.jpg")',
137
          title: textConfig.text10,
138
          text: textConfig.text11,
139
          confirmButtonColor: "#83d0c9",
140
          onClose: () => {
141
            window.location = "http://fb.com";
142
          },
143
        });
144
      }
145
    });
146
​
147
    $("#txtReason").focus(function () {
148
      var handleWriteText = setInterval(function () {
149
        textGenerate();
150
      }, 10);
151
      $("#txtReason").blur(function () {
152
        clearInterval(handleWriteText);
153
      });
154
    });
155
  });
156
});
157
​
