const url = "https://redtrabaje.com/home-office/46ed8966-ac12-40da-ba8e-f39d43ebe037";

const novaUrl = url.replace(/(home-office\/)([0-9a-f-]+)(.*)/, (match, p1, p2, p3) => p1 + p2.slice(0, 5) + p3);

console.log(novaUrl);