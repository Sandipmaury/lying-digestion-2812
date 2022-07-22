document.getElementById("select").addEventListener("mouseover", (event) => {
  document.getElementById("dropDown").style.visibility = "visible";
  document.getElementById("dropDownExpand").innerText = "expand_less";
});

document.body.addEventListener("click", () => {
  document.getElementById("dropDown").style.visibility = "hidden";
  document.getElementById("dropDownExpand").innerText = "expand_more";
});

// section 2 left bar data
let articleData = [
  {
    image:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/hannah-busing-Zyx1bK9mqmA-unsplash.jpg",
    title:
      "How this influencer created a safe space for young women through her small business",
    description:
      "Learn how Ambar Driscoll used her platform as an Instagram influencer to create a small business revolving around empowering and helping young women worldwide.",
    writer: "Umber Bhatti",
    info: "Content Writer @ Buffer",
    date: "Jul 20, 2022",
    readTime: " 7 min read",
    resoueces: "Resources",
    writerImg:
      "https://buffer.com/resources/content/images/size/w100/2022/03/Untitled-design.png",
  },
  {
    image:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/kelly-sikkema-XX2WTbLr3r8-unsplash.jpg",
    title:
      "How These Small Businesses Give Back: Real Examples From 5 Businesses",
    description:
      "Including a charitable component to your small business can make you feel more fulfilled while also adding value to your brand. These examples from 5 companies will inspire you to give back to your community.",
    writer: "Umber Bhatti",
    info: "Content Writer @ Buffer",
    date: "Jul 19, 2022",
    readTime: " 8 min read",
    resoueces: "Resources",
    writerImg:
      "https://buffer.com/resources/content/images/size/w100/2022/03/Untitled-design.png",
  },
  {
    image:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/markus-spiske-fr7SSrc43AQ-unsplash--1-.jpg",
    title:
      "What I’ve Learned About Getting Clients 11 Years into Running a PR and Social Media Agency",
    description:
      "It's not easy to build an agency, much less maintain one for over ten years, but that's what Chris Norton has done with Prohibition PR. In this article, he shares the lessons he has learned from eleven years of running a PR and social media agency.",
    writer: "Chris Norton",
    info: "Founder of Prohibition PR",
    date: "Jul 18, 2022",
    readTime: " 10 min read",
    resoueces: "Flow",
    writerImg:
      "https://buffer.com/resources/content/images/size/w100/2022/07/chrisnorton.png",
  },
  {
    image:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/07/ASK-BUFFER-05.png",
    title:
      "Ask Buffer: Will Scheduling My Social Media Posts Affect My Engagement?",
    description:
      "There's a myth that using third-party scheduling tools will reduce your engagement. This article presents the existing research that debunks this and advice for boosting your engagement.",
    writer: "Tamilore Oladipo",
    info: "Content Writer @ Buffer",
    date: "Jul 14, 2022",
    readTime: " 4 min read",
    resoueces: "Flow",
    writerImg:
      "https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg",
  },
];

for (let {
  image,
  title,
  description,
  writer,
  info,
  date,
  readTime,
  resoueces,
  writerImg,
} of articleData) {
  document.querySelector(".leftBar").innerHTML += `<div>
    <div>
    <img src=${image} alt="">
    <div class="pblictn">
        <p>Publication</p>
        <span class="material-symbols-outlined">
            chevron_right
        </span>
        <p>flow</p>
    </div>
    <h3>${title}</h3>
    <ul class="contentData">
        <li>${date}</li>
        <li>${readTime}</li>
        <li>${resoueces}</li>
    </ul>
    <p>${description}</p>
    </div>
    <div class="section2Writer">
        <div>
            <img src=${writerImg}
                alt="">
        </div>
        <h5>${writer},</h3>
        <p>${info}r</p>
    </div>
</div>`;
}

document.getElementById("searchBox").addEventListener("click", () => {
  document.getElementById("searchDiv").style.visibility = "visible";
  document.body.style.opacity = "0.8";
  document.getElementById("searchDiv").style.opacity = "1";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("searchDiv").style.visibility = "hidden";
  document.body.style.opacity = "1";
});
