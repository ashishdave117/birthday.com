const dailyData ={
  10: {
    message: "Only 10 days to go, and my heart already beats faster just thinking about you. Every day with you feels like a story worth telling — full of joy, warmth, and meaning. I count down the days not to your birthday, but to celebrating the magic that is you."
  },
  9: {
    message: "Unrepeatable Magic - There's no version of this world where someone like you could ever go unnoticed. You don't just exist — you radiate. You walk into a room, and things feel lighter. You speak, and suddenly people want to listen. You're not just one in a million — you're once in a universe."
  },
  8: {
    message: "The Kind of Person Kings Would Be Proud Of - You weren't raised to be ordinary — you were raised as royalty. Not because of crowns or titles, but because of how you carry your heart. With grace, strength, and purpose. You're the kind of person every family dreams of — someone they can point to and say, 'That's our girl.'"
  },
  7: {
    message: "A Mind That Shines - You're more than just beautiful — you're brilliant. The way you think, the way you question, the way you dream — it's rare. You're proof that intelligence and kindness can live in the same heart. The universe gave you both — and you've never wasted either."
  },
  6: {
    message: "A Walking Poem - Some people are like poetry — not just in how they speak, but in how they are. You're that kind of rare. Even your silence has softness, your presence feels like music, and your laugh? That's the chorus the stars wish they wrote."
  },
  5: {
    message: "Her Strength is Soft, But Unbreakable - You don't need to shout to be strong. You don't need to prove to be powerful. You're the kind of strong that shows in how you keep going, how you protect others, how you love with your whole chest. You're unstoppable — not because nothing hurts you, but because you rise anyway."
  },
  4: {
    message: "Grace in Human Form - There's a grace in how you speak to the world — not just with words, but with how you treat people. You make people feel like they matter. You never try too hard to be noticed, and somehow, you're the only one they see. That's not charm. That's something bigger. That's you."
  },
  3: {
    message: "Even the Stars Take Notes - You are the kind of girl who makes the sky jealous. Because you sparkle without trying. You light up people's lives quietly — never asking for praise, never needing attention. But even the stars, if they could, would write your name in constellations."
  },
  2: {
    message: "Born to Be Legendary - Some people are born to follow paths. You were born to make them. Everything about you — from your ideas to your energy — screams legacy. Whatever you choose to do, the world will remember it. Because you're not just here to live. You're here to impact."
  },
  1: {
    message: "The World is Better Because You Exist - You don't have to do anything extraordinary — your existence is already extraordinary. You are the warmest thought in someone's day. You're the calm after someone's storm. And whether or not the world tells you often enough — It's better because you're in it."
  },
  0: {
    message: "🎉 The Day the Stars Chose You - Happy Birthday, you beautiful, chaotic, brilliant soul. You've always been the kind of person who changes the energy of a room just by existing. The kind of person people don't forget — even if they try. You live in the little details. In midnight giggles, in stubborn dreams, in the way your eyes light up when you talk about something you love. That's who you are — stardust wrapped in a heartbeat. Today isn't just your birthday. It's the day the universe decided it needed someone like you. So I hope you feel celebrated — not just for who you've been...but for who you're still becoming. The world is better with you in it. And no matter how far or near I may be, just know — there's someone out here quietly proud of the person you are."
  }
};


function updateDailyContent() {
  const today = new Date();
  const birthday = new Date(2025, 6, 1); // July 1, 2025 (Note: months are 0-indexed)
  const timeDiff = birthday - today;
  const daysRemaining = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
  const dayKey = Math.min(daysRemaining, 10);

  document.getElementById("days-remaining").textContent = daysRemaining;
  document.getElementById("daily-message").textContent = dailyData[dayKey]?.message || "You're amazing every day!";

  const mediaContainer = document.getElementById("media-container");
  mediaContainer.innerHTML = "";

  const imagePath = `images/day${dayKey}.jpg`;
  const videoPath = `videos/day${dayKey}.mp4`;

  const video = document.createElement("video");
  video.src = videoPath;
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.onerror = () => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.onerror = () => img.src = "images/default.jpg";
    mediaContainer.appendChild(img);
  };

  // Try video first
  mediaContainer.appendChild(video);

  // Special case: show animation or change theme on birthday
  if (daysRemaining === 0) {
    document.getElementById("birthday-title").textContent = "🎂 HAPPY BIRTHDAY!";
    document.querySelector(".countdown-banner").style.display = "none";
    document.body.style.background = "linear-gradient(135deg, #ffe0e9 0%, #fad0c4 100%)";
    confettiAnimation(); // Optional: Add confetti function for effect
  }
}

function confettiAnimation() {
  const confetti = document.createElement("div");
  confetti.innerHTML = "🎉 🎊 🎈 💖 💝 🎂";
  confetti.style.position = "fixed";
  confetti.style.top = "10%";
  confetti.style.left = "50%";
  confetti.style.fontSize = "3rem";
  confetti.style.transform = "translateX(-50%)";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

window.onload = updateDailyContent;
