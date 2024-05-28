$(document).ready(function () {
    $("#terminal").focus();
});

var isPasswordRequired = false;
var isGuguluPasswordRequired = false; // Flag to track if password is required for GUGULU

$(document).keyup(function (e) {
    if (e.keyCode == 13) {
        var result = $("#label").html();
        var root = "C:\\web\\user>";
        var tmp = $("#terminal").val().toUpperCase();
        $("#terminal").val("");

        if (isPasswordRequired && tmp === "121020") {
            isPasswordRequired = false;
            result = result + "<br>Password correct! Here is the result:<br>";
            // Here you can execute the command you want to perform after password validation.
            result += processCommand("CHUCHU");
        } else if (isPasswordRequired) {
            result = result + "<br>Incorrect password, try again or refresh the page!<br>";
        } else if (isGuguluPasswordRequired && tmp === "5678") {
            isGuguluPasswordRequired = false;
            result = result + "<br>GUGULU's password correct! Here is the result:<br>";
            // Here you can execute the command you want to perform after GUGULU's password validation.
            result += processCommand("GUGULU");
        } else if (isGuguluPasswordRequired) {
            result = result + "<br>Incorrect password, try again or refresh the page!<br>";
        } else {
            if (tmp === "CHUCHU") {
                isPasswordRequired = true;
                result = result + "<br>Welcome CHUCHU! Please enter the password:<br>";
            } else if (tmp === "GUGULU") {
                isGuguluPasswordRequired = true; // Flag that GUGULU's password is required
                result = result + "<br>Welcome GUGULU! Please enter your password:<br>";
            } else {
                result = '<span class="result-text">'+ result + processCommand(tmp)+'</span>';
            }
        }

        result = result + "<br>";
        $("#label").html(result);
        $("html, body").animate(
            {
                scrollTop: $("#terminal").offset().top
            },
            1
        );
    }
});

function processCommand(command) {
    var result = "";
    var root = "C:\\web\\user>";

    switch (command) {
        case "HELP":
            result +=
                "<br>HELP &nbsp&nbsp&nbsp&nbsp List all available commands.<br>\
                TECH &nbsp&nbsp&nbsp&nbsp See the tech tools.<br>\
                NEWS &nbsp&nbsp&nbsp&nbsp Watch out Global News.<br>\
                JOKES &nbsp&nbsp&nbsp Tell me a joke.<br>\
                WEATHER &nbsp Get the weather details.<br>\
                --------------------------------<br>\
                USER &nbsp&nbsp&nbsp Login to the console.<br>\
                EXIT &nbsp&nbsp&nbsp Clear the console.<br>\
                LINKS &nbsp&nbsp Displays links.<br>\
                CLEAR &nbsp&nbsp Clears the console.<br>";
            break;

        case "TECH":
            result +=
            "<br>• TECH:<br>\
            &nbsp;&nbsp;- Crypto market watch: Bitcoin fails to maintain $70K as profit-booking hits market\
            <a href='https://www.businesstoday.in/technology/news/story/crypto-market-watch-bitcoin-fails-to-maintain-70k-as-profit-booking-hits-market-431165-2024-05-28'>Read More</a><br>\
            &nbsp;&nbsp;- Meta Trains Its AI on Your Instagram and FB Photos\
            <a href='https://beebom.com/opt-out-meta-ai-training-instagram-facebook/'>Read More</a><br>\
            <a href='https://beebom.com/'>• Get all the updates</a><br>"; // Replace '#' with the link you want
        break;

            case "NEWS":
                result +=
                    "<br>• GLOBAL NEWS:<br>\
                    &nbsp;&nbsp;- Scotiabank reports lower Q2 profit as it set aside more money for bad loans\
                    <a href='https://globalnews.ca/news/10528597/airline-industry-competition-bureau-study-canada/'>Read More</a><br>\
                    &nbsp;&nbsp;- Higher airfares, customer complaints fuelling study into Canada’s airline sector\
                    <a href='https://globalnews.ca/news/10528597/airline-industry-competition-bureau-study-canada/'>Read More</a><br>\
                    <a href='https://globalnews.ca/'>• Visit GlobalNews</a><br>"; // Replace '#' with the link you want
                break;
            
            

        case "JOKES":
            result +=  "<br>• JOKES:<br>\
            &nbsp;&nbsp;-  I told my wife she should embrace her mistakes. She gave me a hug.<br>\
            &nbsp;&nbsp;- What’s orange and sounds like a parrot? A carrot! <br>\
            <a href='https://www.elon.edu/u/imagining/about/kidzone/jokes-laughs/'>• Find more here</a><br>"; // Replace '#' with the link you want
            break;

        case "WEATHER":         
            result +=
            "<br>• WEATHER:<br>\
            &nbsp;&nbsp;- Get the weather report!\
            <a href='https://www.google.com/search?q=weather'>Click here.</a><br>";
            break;

        case "CLEAR":
            result = "";
            break;

        case "LINKS":
            result +=  "<br>• LINKS:<br>\
            &nbsp;&nbsp;-  <a href='https://www.kali.org/'>Kali</a><br>\
            &nbsp;&nbsp;-  <a href='https://ubuntu.com/'>Ubuntu</a><br>\
            &nbsp;&nbsp;-  <a href='https://f-droid.org/en/packages/com.termux/'>Termux</a><br>\
            &nbsp;&nbsp;-  <a href='https://f-droid.org/'>F-droid</a><br>\
            &nbsp;&nbsp;-  <a href='https://www.android.com/intl/en_in/'>Android</a><br>"; // Replace '#' with the link you want
            break;

        case "EXIT":
            void window.close();
            break;

        case "":
            break;
//user added
        case "USER":
            result +=
                    "<br>	Enter your username:<br>";
            break;
//user cases added
        case "CHUCHU":
            result +=  "<br>• Reply the code:<br>\
            &nbsp;&nbsp;-  Code<1818>: Who is he?<br>\
            &nbsp;&nbsp;-  Code<0724>: When did you know each other?<br>\
            &nbsp;&nbsp;-  Code<0602>: How it all Started?<br>\
            &nbsp;&nbsp;-  Code<2303>: When he proposed?<br>\
            &nbsp;&nbsp;-  Code<3003>: Fist meet?<br>\
            &nbsp;&nbsp;-  Code<2504>: Fist kiss?<br>\
            &nbsp;&nbsp;-  Code<1705>: Most memorable?<br>\
            &nbsp;&nbsp;-  <a href='https://wa.me/918249079963?text=Helllo%20Babes%20'>Message him</a><br>"; // Replace '#' with the link you want
            break;

            case "GUGULU":
                result +=
                    "<br>	HELP &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Displays a list of available commands.<br>\
                    CONTACT &nbsp&nbsp&nbsp&nbsp&nbsp Displays contact information.<br>\
                    SKILLS &nbsp&nbsp Displays skills.<br>\
                    DEGREES &nbsp&nbsp Displays degrees.<br>\
                    PERSONALINFO &nbsp&nbsp Displays personal information.<br>\
                    EXPERIENCE &nbsp&nbsp Displays experiences.<br>\
                    CLEAR &nbsp&nbsp&nbsp&nbsp&nbsp Clears the console.<br>\
                    LINKS &nbsp&nbsp&nbsp&nbsp&nbsp Displays social links.<br>\
                    PROJECTS &nbsp&nbsp&nbsp Displays a list of projects the site creator has worked on.<br>";
                break;

                case "1818":
                    result +=
                        "<br>• WHO IS HE?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>Rajeeb Rath</span><br>";
                break;

                case "0724":
                    result +=
                        "<br>• WHEN DID YOU KNOW EACH OTHER?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>7 JAN 24 at 23:56</span><br>";
                break;

                case "0602":
                    result +=
                        "<br>• HOW IT ALL STARTED?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>Started as reply in Facebook story on 7th Jan 24 and migrated to instagram and Snapchat to Whatsapp to Love.</span><br>";
                break;

                case "2303":
                    result +=
                        "<br>• WHEN HE PROPOSED?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>In the middle of the night he proposed and she said yes, 23 MAR 24 at 1:21</span><br>";
                break;

                case "3003":
                    result +=
                        "<br>• FIRST MEET?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>Udala Honda Showroom at 17:40</span><br>";
                break;

                case "2504":
                    result +=
                        "<br>• FIRST KISS?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>Second date and first kiss on 25 APR 24</span><br>";
                break;

                case "1705":
                    result +=
                        "<br>• MOST MEMORABLE?:<br>\
                        &nbsp;&nbsp;-  <span class='highlight'>Fouth date, Spend many times together and get a new experience on 17 MAY 24</span><br>";
                break;

        default:
            result = "<br>" + command + " is not recognized as a command.<br>";
            break;
    }

    return result;
}

function changeTitle() {
    var titles = ["版权", "SBKFFC", "18.1.20.8"]; // Add your titles here
    var index = 0;

    setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }, 1000); // Change title every second (1000 milliseconds)
  }

  // Call the function to start changing the title
  changeTitle();
