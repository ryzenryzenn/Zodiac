function zodiac() {
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = "YOUR DATE IS NOT VALID.";


    if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18) {
        result = ("Aquarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "According to The Ascendant, youre a natural revolutionary born to assert your independence in every way possible. You are a deeply creative thinker and often dream about changing the world with your big ideas and unconventional attitude.";

    }

    if (birthmonth == 2 && birthday >= 19 || birthmonth == 3 && birthday <= 20) {
        result = ("Pisces");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Your kindness and creative spirit make your relationships passionate and dreamy, resulting in deep, spiritual connections. The book Spiritual Astrology explains that your signs hopes and dreams have the potential to manifest as a tangible, healing reality as long as you pull them out of your imagination and connect with real people who can help implement your ideas.";

    }
    if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <= 19) {
        result = ("Aries");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Your great ideas, creative mind, and natural drive form the skill set of an incredible leader-which you have the potential to be. Your competitive nature will contribute to your many successes in life, making your achievements a positive influence in the lives of the people around you. Use this to inspire your peers with your abundant enthusiasm, and offer your suggestions to help them grow.";
    }

    if (birthmonth == 4 && birthday >= 20 || birthmonth == 5 && birthday <= 20) {
        result = ("Taurus");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Youre an ambitious person who works to achieve your goals, even when its hard. You have amazing intuition and know a lot about the world around you, so definitely follow it whenever possible. Plus, you are extremely dependable and love to maintain intimate relationships with others your friends love that youre always there for them.";

    }

    if (birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20) {
        result = ("Gemini");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "You are a social butterfly and can make friends with literally anyone due to your bubbly personality and attractive intelligence. Youre super smart, hilariously funny, and strategic AF.";

    }

    if (birthmonth == 6 && birthday >= 21 || birthmonth == 7 && birthday <= 22) {
        result = ("Cancer");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Your empathy is through the roof, and according to the book Spiritual Astrology, this is where your natural intuition and nurturing instincts come from. You often find yourself being the caregiver of your group, making people naturally want to be in your presence. Your loving nature is one of your greatest assets, and your ability to take care of people is second to none, which is one of the reasons your sign is so adored!";

    }
    if (birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <= 22) {
        result = ("Leo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "You dont need to worry about being likable, Leo, because your sign is one of the most charismatic and lovable. Bright, fiery, and dazzling are all words that are often used to describe you! The Sun is the source of all energy and life in the solar system, and similarly, youre the most creative and generous sign. You are a natural leader and have the ability to make some strong friendships.";

    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22) {
        result = ("Virgo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Youre a diligent, considerate, and practical person who works your ass off and makes sure your loved ones are happy. You constantly want to help the people around you and youre highly dependable for your intelligence and resourcefulness.";
    }
    if (birthmonth == 9 && birthday >= 23 || birthmonth == 10 && birthday <= 22) {
        result = ("Libra");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Youre a social butterfly and the biggest people person ever its ridiculously easy for you to make and keep new friends. You can fit in anywhere with your intrinsic social graces, and people love your wit and manners. You have the ability to resolve conflicts just by turning on the charm, making you a perfect asset to your friend group and in social gatherings.";
    }
    if (birthmonth == 10 && birthday >= 23 || birthmonth == 11 && birthday <= 21) {
        result = ("Scorpio");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "You are extremely ambitious and know exactly what you want—and you’re willing to work hard to get it. And with your highly intuitive nature, you’re always looking for answers. Your intensity and depth in relationships helps you build an everlasting trust with the people closest to you.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21) {
        result = ("Sagittarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Your sign is known for its constant motion and never-ending pursuit for knowledge. You work hard and blast yourself out of your comfort zone at every opportunity, be it by traveling, hands-on learning, or setting bold goals that you always somehow surpass. Youre incredibly witty and your storytelling ability is on point youre used to having everyone on the edge of their seat waiting to hear what you have to say. And the confidence you have in all your experiences and knowledge certainly isnt misplaced.";
    }

    if (birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19) {

        result = ("Capricorn");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=40% height=20%>";
        document.getElementById("characteristic").innerHTML = "Your incredible dedication and discipline certainly drives you to work your way to the top, which is how you achieve all your bold goals. You are a fantastic leader and excel at taking initiative in any aspect of life, whether thats work or close relationships.";
    } else if (birthmonth > 12 || birthday > 31) {
        alert("Please enter an accurate date ! ");
    }
    document.getElementById("output").innerHTML = result;
}