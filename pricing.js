const monthBtn = document.getElementById("monthly");
monthBtn.addEventListener("click", () => {
  monthBtn.setAttribute("class", "monthlyBtnStyle");
  yearBtn.setAttribute("class", "");
  monthly();
});
const yearBtn = document.getElementById("yearly");
yearBtn.addEventListener("click", () => {
  yearBtn.setAttribute("class", "yearlyBtnStyle");
  monthBtn.setAttribute("class", "");
  yearly();
});

const monthly = () => {
  document.querySelector(".pricingBox").innerHTML = `<div>
<div class="innerPricingBox">
    <h1>Free</h1>
    <p>For individuals and businesses getting started with social media.</p>
    <div>
        <h2>$</h2>
        <h1>0</h1>
    </div>
    <div class="pStyleMargin">
        <p>Manage up to three channels</p>
    </div>
    <div>
        <p>Billed monthly </p>
    </div>
    <button>Get Started</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Basic publishing tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Landing page builder
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Essentials</h1>
    <p>For professionals who use publishing, analytics & engagement tools.</p>
    <div>
        <h2>$</h2>
        <h1>6</h1>
        <h3>/ month per channel</h3>
    </div>
    <div class="pStyleMargin">
        <p>Add additional channels for $6/month</p>
    </div>
    <div>
        <p>Billed monthly </p>
    </div>
    <button>Get Started</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Planning & publishing tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Analytics tools
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Engagement tools
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Landing page builder
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Team</h1>
    <p>For teams who want unlimited user seating, collaboration, and reporting.</p>
    <div>
        <h2>$</h2>
        <h1>12</h1>
        <h3>/ month per channel</h3>
    </div>
    <div class="pStyleMargin">
        <p>Add additional channels for $12/month</p>
    </div>
    <div>
        <p>Billed monthly</p>
    </div>
    <button>Try free for 14-days</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Essentials features, plus:</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Unlimited team members & clients</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Draft collaboration tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Easy, clear exportable reports
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Agency</h1>
    <p>For marketing agencies with 10 or more social channels.</p>
    <div>
        <h2>$</h2>
        <h1>120</h1>
        <h3>/ month for 10 channels</h3>
    </div>
    <div class="pStyleColor pStyleMargin">
        <p>Add additional channels for</p>
        <p class="dollerBoxPDecoretion">$12</p>
        <p>$6/month</p>
    </div>
    <div>
        <p>Billed monthly</p>
    </div>
    <button>Try free for 14-days</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Team features, plus:</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Custom access & permissions
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Agency-friendly pricing
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
</div>`;
};

const yearly = () => {
  document.querySelector(".pricingBox").innerHTML = `<div>
<div class="innerPricingBox">
    <h1>Free</h1>
    <p>For individuals and businesses getting started with social media.</p>
    <div>
        <h2>$</h2>
        <h1>0</h1>
    </div>
    <div class="pStyleMargin">
        <p>Manage up to three channels</p>
    </div>
    <div>
        <p>Billed at </p>
        <p class="dollerBoxP"> $0/year</p>
    </div>
    <button>Get Started</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Basic publishing tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Landing page builder
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Essentials</h1>
    <p>For professionals who use publishing, analytics & engagement tools.</p>
    <div>
        <h2>$</h2>
        <h1>5</h1>
        <h3>/ month per channel</h3>
    </div>
    <div class="pStyleMargin">
        <p>Add additional channels for $5/month</p>
    </div>
    <div>
        <p>Billed at </p>
        <p class="dollerBoxPDecoretion">$72</p>
        <p class="dollerBoxP"> $60/year</p>
    </div>
    <button>Get Started</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Planning & publishing tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Analytics tools
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Engagement tools
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Landing page builder
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Team</h1>
    <p>For teams who want unlimited user seating, collaboration, and reporting.</p>
    <div>
        <h2>$</h2>
        <h1>10</h1>
        <h3>/ month per channel</h3>
    </div>
    <div class="pStyleMargin">
        <p>Add additional channels for $10/month</p>
    </div>
    <div>
        <p>Billed at </p>
        <p class="dollerBoxPDecoretion">$144</p>
        <p class="dollerBoxP"> $120/year</p>
    </div>
    <button>Try free for 14-days</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Essentials features, plus:</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Unlimited team members & clients</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Draft collaboration tools</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Easy, clear exportable reports
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
<div class="innerPricingBox">
    <h1>Agency</h1>
    <p>For marketing agencies with 10 or more social channels.</p>
    <div>
        <h2>$</h2>
        <h1>100</h1>
        <h3>/ month for 10 channels</h3>
    </div>
    <div class="pStyleColor pStyleMargin">
        <p>Add additional channels for</p>
        <p class="dollerBoxPDecoretion">$10</p>
        <p>$5/month</p>
    </div>
    <div>
        <p>Billed at </p>
        <p class="dollerBoxPDecoretion">$1440</p>
        <p class="dollerBoxP"> $1200/year</p>
    </div>
    <button>Try free for 14-days</button>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Team features, plus:</p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Custom access & permissions
        </p>
    </div>
    <div>
        <span class="material-symbols-outlined">
            done
        </span>
        <p class="checkBoxP">Agency-friendly pricing
        </p>
    </div>
    <p class="allFeateres">See all features</p>
</div>
</div>`;
};
yearly();
