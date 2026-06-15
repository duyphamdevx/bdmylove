/**
 * ✨ CHỈNH SỬA FILE NÀY để tùy biến lời chúc sinh nhật! ✨
 */

const CONFIG = {
  // ── Thông tin người nhận ──────────────────────────────────────
  name: "Nhi - Người anh yêu",
  photo: "./img/nhi.jpg",       // Đặt ảnh của Nhi vào thư mục img/ và đổi tên file khớp ở đây
  music: "./music/hbd.mpeg",      // Đặt bản nhạc tình cảm hai đứa thích vào thư mục music/

  // ── Màu sắc giao diện (Theme Colors) ──────────────────────────
  colors: {
    primary: "#ff65a3",           // Đổi sang màu hồng đào lãng mạn hơn
    accent: "#60a5fa",            
    dark: {
      background: "#0f172a",      
      text: "#f1f5f9",            
    },
    light: {
      background: "#fafaf9",      
      text: "#1e293b",            
    },
  },

  // ── Chế độ màu mặc định ───────────────────────────────────────
  defaultMode: "dark",

  // ── Các phân đoạn nội dung (Sections) ─────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Yêu dấu của anh,",
      subtitle: "Em có biết hôm nay là một ngày cực kỳ đặc biệt không? ✨",
    },
    {
      type: "countdown",
      from: 3,                    // Đếm ngược từ 3
      goText: "❤️",               // Thay bằng hình trái tim cho tình cảm
    },
    {
      type: "announcement",
      text: "Hôm nay là ngày thế giới đón chào một thiên thần... Ngày sinh nhật của em! 🎉",
    },
    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật cô gái anh yêu nhất! Cảm ơn em vì đã đến, đã luôn ở bên, lắng nghe và mang đến cho anh những điều ngọt ngào nhất. Tuổi mới, anh chỉ mong Nhi của anh luôn bình an, cười thật nhiều, còn hạnh phúc của em... cứ để anh lo nhé! Chúc mừng sinh nhật em yêu! 😘",
      buttonText: "Bấm vào đây đi bé",
    },
    {
      type: "ideas",
      lines: [
        "Anh đã ngồi nghĩ...",
        "Điều gì ở em khiến anh say đắm đến vậy?",
        "Là nụ cười tỏa nắng của em này...",
        "Là cái tính hay dỗi nhưng dỗ tí là xong 😆...",
        "Là sự dịu dàng em dành cho anh...",
        "Và điều cuối cùng anh muốn nói...",
        "Được gọi Nhi là 'người yêu' chính là đặc quyền tuyệt vời nhất mà anh có <span>❤️</span>",
      ],
      bigLetters: "Thiên Nhi", 
    },
    {
      type: "quote",
      text: "Gặp được em là điều may mắn nhất, yêu em là lựa chọn hạnh phúc nhất, và có em là món quà vô giá nhất cuộc đời anh.",
      author: "Gửi từ tình yêu của em",
    },
    {
      type: "stars",
      count: 60, // Tăng thêm sao lấp lánh cho thơ mộng
    },
    {
      type: "balloons",
      count: 35, // Tăng thêm bóng bay
    },
    {
      type: "profile",
      wishTitle: "Gửi công chúa nhỏ của anh,",
      wishText: "Dù ngoài kia có giông bão thế nào, hãy nhớ rằng luôn có một bờ vai ở đây chờ em dựa vào. Mong rằng mọi điều ước khi em thổi nến đều sẽ trở thành hiện thực. Anh yêu em nhiều hơn những gì anh có thể nói! 👑❤️",
    },
    {
      type: "profile",
      wishTitle: "Gửi Nhi của anh, ❤️",
      wishText: "Một ngày đặc biệt dành cho một người vô cùng đặc biệt. Bước sang tuổi mới chúc em luôn vui vẻ, hạnh phúc, tràn đầy năng lượng tích cực. Hy vọng những điều may mắn và tươi đẹp nhất sẽ luôn đến với em.<br><br>Cảm ơn vì đã vô tình làm cho thế giới của anh trở nên tươi đẹp hơn. Chúc em có một ngày sinh nhật thật ý nghĩa và đáng nhớ!",
    },
    {
      type: "fireworks",
      count: 30, // Bắn pháo hoa ăn mừng
    },
    {
      type: "confetti",
      count: 15,
    },
    {
      type: "closing",
      text: "Xong rồi đó! Giờ thì em có thể quay lại nhắn tin và ôm anh một cái thật chặt được chưa? 🥰",
      replayText: "Hoặc bấm vào đây nếu em muốn chìm đắm trong sự ngọt ngào này lần nữa.",
    },
  ],
};