<?php include("../include/connection.php"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- default meta title -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- OG Meta Tag -->
    <meta name="robots" content="noindex, nofollow">
    <meta property="og:title" content="Tech2Globe">
    <meta property="og:description " content="">
    <meta property="og:image"
        content="https://www.designtocodes.com/wp-content/uploads/2023/08/TechStart-Pro-Responsive-Bootstrap-Landing-Page.jpg/">
    <!-- title -->
    <title>Tech2Globe</title>
    <!-- favicon -->
    <link rel="icon" id="favicon" href="./assets/images/favicon.ico" type="image/ico" sizes="16x16">
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <!-- font awesome 5 cdn/ icon link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Slider CSS Link -->
    <link rel="stylesheet" href="./lib/slick-1.8.1/slick/slick.css">
    <link rel="stylesheet" href="./lib/slick-1.8.1/slick/slick-theme.css">
    <!-- fancybox image gallery -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
    <!-- bootstrap css -->
    <link rel="stylesheet" href="./lib/bootstrap-5/css/bootstrap.min.css">
    <!-- main css -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <!-- responsive css -->
    <link rel="stylesheet" href="./assets/css/responsive.css">
</head>

<body>
    <!--  preloader start  -->
    <!-- <div class="preloader">
        <img src="./assets/images/logo.png" alt="Preloader Logo">
    </div> -->
    <!--  preloader end  -->

    <!-- header start -->
    <header class="d2c_navbar sticky-top">
        <div class="container">
            <!-- navbar -->
            <nav class="navbar navbar-expand-lg px-0 py-0" id="d2c_main_nav">
                <!-- logo -->
                <a class="navbar-brand" href="./index.html"><img src="./assets/images/logo.png" class="w-100"
                        alt="Logo"></a>
                <!-- logo -->
                <!-- hamburger -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fas fa-bars"></i></span>
                </button>
                <!-- hamburger -->
                <!-- nav item -->
                <div class="collapse navbar-collapse js-clone-nav justify-content-end">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#home">home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">about</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#whychooseus">Why Choose Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#casestudies">Case Studies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#testimonial">testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="btn d-block d-lg-none">Get Free PPC Audit</a>
                        </li>
                    </ul>
                </div>
                <!-- <a href="#contact" class="btn d-none d-lg-block">Get In touch</a> -->
                <a href="#home" class="btn d-none d-lg-block">Get Free PPC Audit</a>
                <!-- nav item -->
            </nav>
            <!-- navbar -->
            <!-- tab and mobile view -->
            <div class="collapse navbar-collapse d2c_mobile_view" id="navbarSupportedContent">
                <div class="show_width container">
                    <div class="text-right">
                        <button class="navbar-toggler d2c_cross_btn p-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa fa-times"></i></span>
                        </button>
                    </div>

                    <div class="navbar px-0 d2c_mobile_view_body"></div>
                </div>
            </div>
            <!-- tab and mobile view -->
        </div>
    </header>
    <!-- header end -->

    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

    <main data-bs-spy="scroll" data-bs-target="#d2c_main_nav" class="position-relative">
        <div class="d2c_hero_bg">

            <!-- hero start -->
            <section class="d2c_hero_wrapper" id="home">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 pe-5">
                            <h1>Free <span>Amazon Account Growth Audit</span> - Discover Hidden Revenue in 24 Hours</h1>
                            <p>Get a professional Amazon seller account analysis from certified experts and uncover</p>
                            <div class="d2c_form_points">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="fas fa-check"></i> Revenue leaks</li>
                                            <li><i class="fas fa-check"></i> Keyword ranking opportunities</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="fas fa-check"></i> PPC optimization gaps</li>
                                            <li><i class="fas fa-check"></i> Competitor strategies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="review-wrapper mt-3">
                                <div class="d2c_card_wrapper">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5>Within 3 months our Amazon revenue increased by <span>62%</span> thanks to their
                                        PPC and
                                        listing optimization strategy.</h5>
                                    <div class="detail">
                                        <img src="./assets/images/profile-2.webp" class="img-fluid"
                                            alt="Testimonial One">
                                        <div class="name-block">
                                            <h3 class="mb-0"><span> Sarah Johnson</span></h3>
                                            <p class="mb-0">Founder. Organic Glow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="highlight-points">
                                <ul>
                                    <li><small>⭐</small> Trusted by <span>300+</span> Amazon Brands </li>
                                    <li><small>💰</small> Managed <span>$50M+</span> Amazon Revenue</li>
                                    <li><small>📈</small> Average <span>38%</span> Sales Growth in 90 Days</li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-5 mb-4 mb-lg-0">
                            <div class="formblock">
                                <h2 class="d2c_title position-relative mb-3">Get Your Free <span>Amazon Growth</span>
                                    Audit</h2>
                                <form id="contactForm" name="contact" method="post">

                                    <div id="formErrors"></div>

                                    <div class="mb-3">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name"
                                            id="name" required onkeypress="return withoutspecialnumeric(event)">
                                    </div>

                                    <div class="mb-3">
                                        <input type="email" class="form-control" name="mailid"
                                            placeholder="Your Email Address" id="mailid" required
                                            onkeyup="nospaces(this)">
                                    </div>

                                    <div class="mb-3">
                                        <select class="form-control" name="countrycode" placeholder="Select Country"
                                            id="countrycode" required>
                                            <?php include("../include/countryCodes.php"); ?>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <input type="text" class="form-control" name="phone"
                                            placeholder="Your Phone No." id="phone" minlength="10" maxlength="13"
                                            required onkeypress="return isNumberKey(event)">
                                    </div>

                                    <div class="mb-3">
                                        <textarea class="form-control" name="comment" placeholder="Enter Message"
                                            id="comment" required></textarea>
                                    </div>

                                    <input type="text" name="website" class="d-none" />

                                    <div class="cf-turnstile" data-sitekey="0x4AAAAAAAZkfkKo2ooZlFK4"
                                        data-theme="light">
                                    </div>

                                    <button type="submit" class="btn btn-danger mt-3" id="contactFormSubmitBtn">🔥 Get
                                        Your Free Amazon Growth Audit</button>
                                    <p class="np-line"><i class="fas fa-lock"></i> No spam. No: obligation. Just
                                        insights to grow Amazon sales</p>
                                </form>
                                <script>
                                    window.onload = function () {
                                        $("#contactForm").on("submit", function (event) {
                                            event.preventDefault();
                                            const formDataa = new FormData(this);
                                            var submitButton = $("#contactFormSubmitBtn");
                                            submitButton.prop('disabled', true);
                                            submitButton.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...');
                                            var fullName = $("#name").val();
                                            var emailId = $("#mailid").val();
                                            var country = $("#countrycode").val();
                                            var phoneNumber = $("#phone").val();
                                            var message = $("#comment").val();
                                            var turnstileResponse = $("input[name='cf-turnstile-response']").val();
                                            $(".alert").remove();
                                            if (!fullName || !emailId || !country || !phoneNumber || !message) {
                                                $("#formErrors").html('<div class="alert alert-danger">All fields are required.</div>');
                                                submitButton.prop('disabled', false);
                                                submitButton.html('Submit');
                                                return false;
                                            }

                                            if (!turnstileResponse) {
                                                $("#formErrors").html('<div class="alert alert-danger">Please complete the CAPTCHA verification.</div>');
                                                submitButton.prop('disabled', false);
                                                submitButton.html('Submit');
                                                return false;
                                            }

                                            // Email format validation
                                            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                                            if (!emailPattern.test(emailId)) {
                                                // Show error alert
                                                $("#formErrors").html('<div class="alert alert-danger">Please enter a valid email address.</div>');
                                                submitButton.prop('disabled', false);
                                                submitButton.html('Submit');
                                                return false;
                                            }

                                            var phonePattern = /^\d{6,15}$/;
                                            if (!phonePattern.test(phoneNumber)) {
                                                // Show error alert
                                                $("#formErrors").html('<div class="alert alert-danger">Please enter a valid phone number.</div>');
                                                submitButton.prop('disabled', false);
                                                submitButton.html('Submit');
                                                return false;
                                            }

                                            var formData = {
                                                name: fullName,
                                                mailid: emailId,
                                                countrycode: country,
                                                phone: phoneNumber,
                                                comment: message,
                                                turnstileResponse: turnstileResponse
                                            };

                                            $.ajax({
                                                type: "POST",
                                                url: "/form-email/",
                                                data: formData,
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response.success) {
                                                        $("#formErrors").html('<div class="alert alert-success">' + response.message + '</div>');
                                                        $("#contactForm").trigger("reset");
                                                        setTimeout(function () {
                                                            window.location.href = "https://tech2globe.com/thank-you";
                                                        }, 1000);
                                                    } else {
                                                        $("#formErrors").html('<div class="alert alert-danger">' + response.message + '</div>');
                                                    }

                                                    submitButton.prop('disabled', false);
                                                    submitButton.html('Submit');
                                                },
                                                error: function () {
                                                    $("#formErrors").html('<div class="alert alert-danger">Error in form submission. Please try again.</div>');
                                                    submitButton.prop('disabled', false);
                                                    submitButton.html('Submit');
                                                }
                                            });
                                        });
                                    };
                                </script>
                                <hr />
                                <div class="d2c_form_points">
                                    <ul>
                                        <li><i class="fas fa-check"></i> Competitor Revenue Analysis</li>
                                        <li><i class="fas fa-check"></i> Top Keywords Driving Sales</li>
                                        <li><i class="fas fa-check"></i> Listing Optimization Guide</li>
                                        <li><i class="fas fa-check"></i> Amazon PPC Audit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- hero end -->
        </div>

        <div class="ppc-tabs-section  py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="d2c_title text_start text-center position-relative">Why <span>Amazon
                                Sellers</span> Struggle With PPC </h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="tabs-header">
                            <button class="tab active">
                                <i class="fas fa-fire"></i> High ACOS
                            </button>
                            <button class="tab">
                                <i class="fas fa-money-bill-wave"></i> Wasted Ad Spend
                            </button>
                            <button class="tab">
                                <i class="fas fa-bullseye"></i> Poor Keywords
                            </button>
                            <button class="tab">
                                <i class="fas fa-chart-line"></i> No Growth from Ads
                            </button>
                        </div>

                        <div class="tabs-content">
                            <div class="tab-pane active">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><i class="fas fa-fire"></i> <span>High</span> ACOS</h3>
                                        <h5>You're getting sales… but barely making profit.</h5>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="image-blocktab coloredbg">
                                            <img src="assets/images/Hight-Acos1.webp" alt="High Acos"
                                                class="img-fluid rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><i class="fas fa-money-bill-wave"></i> <span>Wasted</span> Ad Spend</h3>
                                        <h5>Money goes into ads, but nothing comes back.</h5>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="image-blocktab  coloredbg">
                                            <img src="assets/images/Wasted-Ad-Spend1.webp" alt="Wasted Ad Spend"
                                                class="img-fluid rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><i class="fas fa-bullseye"></i> <span>Poor</span> Keywords</h3>
                                        <h5>Your ads show to the wrong people.</h5>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="image-blocktab">
                                            <img src="assets/images/keyword.webp" alt="Poor Keywords"
                                                class="img-fluid rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><i class="fas fa-chart-line"></i> <span>No</span>  Growth from Ads</h3>
                                        <h5>You keep spending, but your business isn’t growing.</h5>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="image-blocktab">
                                            <img src="assets/images/Low-Organic-Rank.webp" alt="Low Organic Rank"
                                                class="img-fluid rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- testimonial section start -->
        <section class="d2c_testimonial_wrapper" id="testimonial">
            <div class="container">
                <h3 class="d2c_sub_title text_start text-md-center position-relative">Our <span>Testimonial</span>
                </h3>
                <h2 class="d2c_title text_start text-md-center position-relative">Proven Results for Amazon Sellers
                    Like You<span></span></h2>
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-3">
                        <div class="row justify-content-center">
                           
                        <div class="video-item" data-="zoom-in" data--duration="800">
                        <div class="card h-100">
                            <div class="card-img">
                                <a class="" data-bs-toggle="modal" href="#vidreviewOne" role="button" aria-label="View video testimonial for Strategic Account Management service">
                                    <img class="img-fluid w-100" loading="lazy" src="assets/images/strategic-account-management-video-testimonial.webp" alt="Client video testimonial for Strategic Account Management service">
                                </a>

                            </div>
                            <div class="card-title">
                                <h5>"Strategic Account Management"</h5>
                            </div>
                            <div class="card-description text-center">
                                <div class="stats">
                                    <div class="stat">
                                        <p class="stat-value text-danger">+105%</p>
                                        <p class="stat-label">Orders</p>
                                    </div>
                                    <div class="divider"></div>

                                    <div class="stat">
                                        <p class="stat-value text-danger">+213%</p>
                                        <p class="stat-label">Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     

                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="row testimonial_slider">
                            <div class="col h-100">
                                <div class="d2c_card_wrapper text-center">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5 style="text-transform: none;">Simple, yet game-changing strategies helped us achieve a 45% increase in our monthly Amazon sales within just 60 days.</h5>
                                    <div class="profile-block d-flex gap-2 align-items-center">
                                        <div class="profile-avatar" data-name="Tom Harris"></div>
                                        <div class="profile-block-name">
                                            <h3 class="mb-0">Tom Harris</h3>
                                            <p class="mb-0">Co-Founder of FitFusion</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col h-100">
                                <div class="d2c_card_wrapper text-center">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5 style="text-transform: none;">The detailed audit exposed all our blind spots clearly, resulting in our PPC ROAS improving significantly by an impressive 250%
                                    </h5>
                                    <div class="profile-block d-flex gap-2 align-items-center">
                                        <div class="profile-avatar" data-name="Rachel Miller"></div>
                                        <div class="profile-block-name">
                                            <h3 class="mb-0">Rachel Miller</h3>
                                            <p class="mb-0">CEO, EcoWave Essentials</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col h-100">
                                <div class="d2c_card_wrapper text-center">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5 style="text-transform: none;">With their PPC services, we improved our ad performance and received insights, making us very happy with results achieved.</h5>
                                    <div class="profile-block d-flex gap-2 align-items-center">
                                        <div class="profile-avatar" data-name="Mike Johnson"></div>
                                        <div class="profile-block-name">
                                            <h3 class="mb-0">Mike Johnson</h3>
                                            <p class="mb-0">E-commerce Specialist</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col h-100">
                                <div class="d2c_card_wrapper text-center">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5 style="text-transform: none;">They do an excellent job closely monitoring our campaign performance to ensure we stay on track and optimize everything fully.
                                    </h5>
                                    <div class="profile-block d-flex gap-2 align-items-center">
                                        <div class="profile-avatar" data-name="David Wilson"></div>
                                        <div class="profile-block-name">
                                            <h3 class="mb-0">David Wilson</h3>
                                            <p class="mb-0">Online Retail Manager</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col h-100">
                                <div class="d2c_card_wrapper text-center">
                                    <img src="assets/images/Stars.webp" alt="reviews" class="starimg">
                                    <h5 style="text-transform: none;">Their PPC services boosted our online sales significantly, providing clear reports and excellent results through their skilled team.
                                    </h5>
                                    <div class="profile-block d-flex gap-2 align-items-center">
                                        <div class="profile-avatar" data-name="John Doe"></div>
                                        <div class="profile-block-name">
                                            <h3 class="mb-0">John Doe</h3>
                                            <p class="mb-0">Marketing Manager</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-12 pt-5">
                        <div class="clients_wrapper" style="position: relative;">
                            <div class="clients_wrapper_header">
                                <h2 class="d2c_title text_start text-md-center position-relative">Swim with the big fish
                                </h2>
                            </div>

                            <div class="clients_wrapper_body">
                                <ul>
                                    <li><img src="./assets/images/clients/abrams.png" alt="Abrams"></li>
                                    <li><img src="./assets/images/clients/aniise.png" alt="Aniise">
                                    <li><img src="./assets/images/clients/ankit-toys-games.png" alt="Ankit Toys Games">
                                    </li>
                                    <li><img src="./assets/images/clients/arar.png" alt="Arar"></li>
                                    <li><img src="./assets/images/clients/bluebird.png" alt="Bluebird"></li>
                                    <li><img src="./assets/images/clients/frontier.png" alt="Frontier"></li>
                                    <li><img src="./assets/images/clients/in-season-jewelry.png"
                                            alt="In Season Jewelry"></li>
                                    <li><img src="./assets/images/clients/liberty-house-toys.png"
                                            alt="Liberty House Toys"></li>
                                    <li><img src="./assets/images/clients/lifetree.png" alt="Lifetree"></li>
                                    <li><img src="./assets/images/clients/ms-glamour.png" alt="MS Glamour"></li>
                                    <li><img src="./assets/images/clients/swiss-arabian.png" alt="Swiss Arabian"></li>
                                    <li><img src="./assets/images/clients/the-good-pea.png" alt="The Good Pea"></li>
                                    <li><img src="./assets/images/clients/ugreen.png" alt="Ugreen"></li>
                                    <li><img src="./assets/images/clients/vanshveda.png" alt="Vanshveda"></li>
                                    <li><img src="./assets/images/clients/wooden-street.png" alt="Wooden Street"></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- partner section start -->
        <!-- <div class="d2c_partner_wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2 class="d2c_title text-center position-relative">Brands we’ve grown on <span>Amazon</span>
                        </h2>
                    </div>
                </div>
                <div class="row d2c_partner_slider">
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/abrams.png" alt="Abrams">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/ankit-toys-games.png" alt="Ankit Toys Games">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/arar.png" alt="Arar">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/bluebird.png" alt="Bluebird">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/frontier.png" alt="Frontier">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/liberty-house-toys.png" alt="Liberty House Toys">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/lifetree.png" alt="Lifetree">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/ms-glamour.png" alt="MS Glamour">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/the-good-pea.png" alt="The Good Pea">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/ugreen.png" alt="Ugreen">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/vanshveda.png" alt="Vanshveda">
                        </div>
                    </div>
                    <div class="col">
                        <div class="d2c_img_wrapper">
                            <img src="./assets/images/clients/wooden-street.png" alt="Wooden Street">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- partner section end -->
        <!-- testimonial section end -->

        <div class="d2c_blog_bg_wrapper">
            <!-- blog section start -->
            <section class="d2c_blog_wrapper" id="casestudies">
                <div class="container">
                    <h3 class="d2c_sub_title text_start text-md-center position-relative">Case <span>Studies</span></h3>
                    <h2 class="d2c_title text_start text-md-center position-relative">Real Client
                        <span>Results</span>
                    </h2>
                    <p class="text_start text-md-center mb-4">See how we've skyrocketed revenue for our clients on Amazon.
                    </p>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 mb-4 mb-lg-0">
                            <div class="d2c_card_wrapper d2c_blog_card mb-4">
                                <img src="./assets/images/amazon-map-pricing-surveillance.webp" class="img-fluid w-100" alt="Case Study">
                                <div class="d2c_card_body">
                                    <!-- <p class="mb-2">Premium Lifestyle Apparel Brand</p> -->
                                    <h4 class=" text-white text-center">How We Increased Sales by 51% While Reducing ACOS by 63% </h4>

                                    <!-- <a href="#">Learn More <i class="fas fa-arrow-right"></i></a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="d2c_card_wrapper d2c_blog_card mb-4">
                                <a href="./assets/images/case-study-2.webp">
                                    <img src="./assets/images/case-study-2.webp" class="img-fluid w-100" alt="Case Study">
                                </a>
                                <div class="d2c_card_body">
                                    <!-- <p class="mb-2">Premium Lifestyle Apparel Brand</p> -->
                                    <h4 class=" text-white text-center">Driving 56% Sales Growth While Reducing ACOS by 41% with Optimized Amazon PPC </h4>

                                    <!-- <a href="#">Learn More <i class="fas fa-arrow-right"></i></a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="d2c_card_wrapper d2c_blog_card ">
                                <a href="./assets/images/case-study-3.webp">
                                    <img src="./assets/images/case-study-3.webp" class="img-fluid w-100" alt="Case Study">
                                </a>
                                <div class="d2c_card_body">
                                    <!-- <p class="mb-2">Premium Lifestyle Apparel Brand</p> -->
                                    <h4 class=" text-white text-center">How Tech2Globe Drove 300%+ Sales Growth While Reducing ACoS by 14.38% </h4>

                                    <!-- <a href="#">Learn More <i class="fas fa-arrow-right"></i></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- blog section end -->
        </div>

        <div class="d2c_shade_bg_wrapper">
            <!-- service section start -->
            <section class="d2c_service_wrapper oldservice" id="service">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-7 text-center">
                            <h3 class="d2c_sub_title position-relative">Our <span>Services</span></h3>
                            <h2 class="d2c_title position-relative">Dominate <span>Amazon</span> with Full-Service
                                Management
                            </h2>
                            <p class="text-white pb-5">Maximize your Amazon sales with our expert PPC, SEO & Amazon DSP
                                services.</p>
                        </div>
                    </div>
                    <div class="row align-items-center">

                        <div class="col-xl-6 mb-4 mb-xl-0">
                            <div class="row">
                                <div class="col-md-10">
                                    <ul>
                                        <li><i class="fas fa-hand-point-right"></i> Amazon PPC & DSP</li>
                                        <li><i class="fas fa-hand-point-right"></i> Amazon SEO</li>
                                        <li><i class="fas fa-hand-point-right"></i> AI-powered Market Insights</li>
                                        <li><i class="fas fa-hand-point-right"></i> Competitor Targeting Strategies</li>
                                        <li><i class="fas fa-hand-point-right"></i> Advanced Amazon Advertising</li>
                                        <li><i class="fas fa-hand-point-right"></i> Inventory & Demand Planning</li>
                                        <li><i class="fas fa-hand-point-right"></i> U.S.-based Experts</li>
                                        <!-- <p>Optimize your Amazon ad campaigns
                                            for maximum ROI with PPC and Amazon</p> -->
                                    </ul>
                                </div>
                                <!-- <div class="col-md-10">
                                    <ul>
                                        <li><i class="fas fa-hand-point-right"></i> Amazon SEO</li>
                                        <p>Boost organic rankings and drive more sales through keyword-optimized
                                            listings and content that ranks.</p>
                                    </ul>
                                </div> -->
                            </div>

                        </div>

                        <div class="col-xl-6">

                            <img src="assets/images/amazon-dsp-image.webp" alt="AmazonDSP"
                                class="img-fluid rounded-3 bwlight">

                        </div>

                    </div>

                    <div class="cta_section text-center">
                        <h3 class="text-center pb-3">Speak with our Amazon experts and unlock new levels of growth!</h3>
                        <div class="btn-block-cta">
                            <a href="#home" class="btn">
                                🔥 Get Your Free Amazon Growth Audit
                            </a>
                        </div>
                        <div class="cmt text-center">
                            <img src="assets/images/Stars.webp" alt="Stars" class="img-fluid">
                            <p>Trusted by <strong>300+ Amazon Sellers</strong></p>
                        </div>
                    </div>


                </div>
            </section>
            <!-- service section end -->

            <!-- features section start -->
            <section class="d2c_feature_wrapper">
                <div class="container">
                    <div class="row">
                        <h2 class="d2c_title position-relative text-center">How Our <span>Amazon Growth</span> Process
                            Works</h2>



                        <!-- <div class="col-md-3 mb-4">
                            <div class="d2c_card_wrapper">
                                <div class="d2c_icon_wrapper">
                                    <i class="fas fa-object-ungroup"></i>
                                </div>
                                <h3>Free PPC Audit</h3>
                                <p>Get a detailed audit revealing key Amazon PPC improvement areas.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mt-xl-4 mb-4 mb-lg-0">
                            <div class="d2c_card_wrapper">
                                <div class="d2c_icon_wrapper">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h3>Keyword & Competitor Analysis</h3>
                                <p>Identify profitable keywords and analyze competitors strategies</p>
                            </div>
                        </div>
                        <div class="col-md-3 mb-4 mb-md-0">
                            <div class="d2c_card_wrapper d2c_service_card position-relative">
                                <div class="d2c_icon_wrapper">
                                    <i class="fas fa-chart-bar"></i>
                                </div>
                                <h3>Campaign Optimization</h3>
                                <p>Launch & optimize campaigns for maximum ROI.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mt-xl-4">
                            <div class="d2c_card_wrapper">
                                <div class="d2c_icon_wrapper">
                                    <i class="fas fa-calendar-check"></i>
                                </div>
                                <h3>Scale Profitably</h3>
                                <p>Increase sales and profitability through continuous optimization.</p>
                            </div>
                        </div> -->


                        <div class="timeline pt-4">
                            <div class="step">
                                <div class="circle-wrapper">
                                    <div class="outer-circle">
                                        <div class="inner-circle">
                                            <div class="icon">1</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class="bottom-text">
                                    <h3>Free<br /> PPC Audit</h3>
                                    <p>Get a detailed audit revealing key Amazon PPC improvement areas.</p>
                                </div>
                            </div>


                            <div class="step">
                                <div class="circle-wrapper">
                                    <div class="outer-circle">
                                        <div class="inner-circle">
                                            <div class="icon">2</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class="bottom-text">
                                    <h3>Keyword & Competitor Analysis</h3>
                                    <p>Identify profitable keywords and analyze competitors strategies</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="circle-wrapper">
                                    <div class="outer-circle">
                                        <div class="inner-circle">
                                            <div class="icon">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class="bottom-text">
                                    <h3>Campaign<br /> Optimization</h3>
                                    <p>Launch & optimize campaigns for maximum ROI.</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="circle-wrapper">
                                    <div class="outer-circle">
                                        <div class="inner-circle">
                                            <div class="icon">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class="bottom-text">
                                    <h3>Scale<br /> Profitably</h3>
                                    <p>Increase sales and profitability through continuous optimization.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <!-- features section end -->
        </div>

        <div class="d2c_team_bg_wrapper">
            <!-- team section start -->
            <section class="d2c_team_wrapper" id="whychooseus">
                <div class="container">

                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="d2c_title  position-relative">Why Choose
                                <span>Tech2Globe</span>
                            </h2>
                        </div>
                        <div class="col-md-6">
                            <p class="text-center desc-title mb-3">We're the trusted Amazon growth partner that delivers
                            exceptional results.</p>
                        </div>

                        
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <div class="d2c_card_wrapper text-center mb-3">
                                <div class="d-flex gap-3 align-items-center">
                                    <div class="d2c_icon_wrapper">
                                        <i class="fas fa-trophy"></i> <!-- Proven Track Record -->
                                    </div>
                                    <div class="d2c_detail">
                                        <h3>Proven Track Record</h3>
                                        <p>Over <span>$1 Billion</span> in sales driven for our clients</p>
                                    </div>
                                </div>
                            </div>

                            <div class="d2c_card_wrapper text-center mb-3">
                                <div class="d-flex gap-3 align-items-center">
                                    <div class="d2c_icon_wrapper">
                                        <i class="fab fa-amazon"></i> <!-- Amazon Experts -->
                                    </div>
                                    <div class="d2c_detail">
                                        <h3>Amazon Experts</h3>
                                        <p><span>12+ Years</span> of maximizing Amazon success</p>
                                    </div>
                                </div>
                            </div>

                            <div class="d2c_card_wrapper d2c_service_card text-center position-relative">
                                <div class="d-flex gap-3 align-items-center">
                                    <div class="d2c_icon_wrapper">
                                        <i class="fas fa-chart-line"></i> <!-- Full-Spectrum Strategies -->
                                    </div>
                                    <div class="d2c_detail">
                                        <h3>Full-Spectrum Strategies</h3>
                                        <p>Customized solutions for <span>PPC, SEO,</span> & growth</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="row justify-content-center featured-on">
                                <div class="col-md-4">
                                    <img src="assets/images/g2.webp" alt="G2" class="img-fluid p-3">
                                </div>
                                <div class="col-md-4">
                                    <img src="assets/images/clutch_2024.webp" alt="Clutch" class="img-fluid p-3">
                                </div>
                                <div class="col-md-4">
                                    <img src="assets/images/trustpilot.webp" alt="Trustpilot" class="img-fluid p-3">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <!-- team section end -->

        </div>

        <section class="compare-section py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-lg-6 offset-0 offset-lg-3 px-2 px-md-5">
                                <h3 class="d2c_sub_title text-start text-md-center position-relative">Why Tech2Globe
                                    <span>Wins</span>
                                </h3>
                                <h2 class="d2c_title text-start text-md-center position-relative">Superior Strategies
                                    <span>Proven Results</span>
                                </h2>
                            </div>
                        </div>

                        <div class="compare-wrapper">

                            <div class="compare-row">
                                <div class="compare-left">Competitor <i class="fas fa-times-circle"></i></div>
                                <div class="compare-right">
                                    <img src="assets/images/logo-t2g.png" alt="tech2globe">
                                </div>
                            </div>

                            <div class="compare-row">
                                <div class="compare-left">One-size-fits-all strategies</div>
                                <div class="compare-right">
                                    <strong>Dedicated Amazon Specialists</strong>
                                    <span>Work with experts focused solely on Amazon growth, including PPC, SEO, and
                                        DSP.</span>
                                </div>
                            </div>

                            <div class="compare-row">
                                <div class="compare-left">Limited expertise</div>
                                <div class="compare-right">
                                    <strong>Data-Driven Strategy</strong>
                                    <span>Campaigns are optimized using performance data, keyword insights, and
                                        competitor analysis.</span>
                                </div>
                            </div>

                            <div class="compare-row">
                                <div class="compare-left">Offshore support teams</div>
                                <div class="compare-right">
                                    <strong>No Outsourcing</strong>
                                    <span>Your account is handled by in-house Amazon experts for quality and
                                        consistency.</span>
                                </div>
                            </div>

                            <div class="compare-row">
                                <div class="compare-left">Slow, reactive scaling</div>
                                <div class="compare-right">
                                    <strong>Transparent Reporting</strong>
                                    <span>Get clear reports and insights on performance and budget usage.</span>
                                </div>
                            </div>

                            <div class="compare-row">
                                <div class="compare-left">No proven results</div>
                                <div class="compare-right">
                                    <strong>Proven Results With Global Brands</strong>
                                    <span>Helping 300+ Amazon sellers scale revenue with optimized PPC
                                        strategies.</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="cta_section text-center">
                            <h3 class="text-center pb-3">Grow Your <span>Amazon Business</span> With Proven Strategies
                                That Deliver Results</h3>
                            <div class="btn-block-cta">
                                <a href="#home" class="btn">
                                    🔥 Get Your Free Amazon Growth Audit
                                </a>
                            </div>
                            <div class="cmt text-center">
                                <img src="assets/images/Stars.webp" alt="Stars" class="img-fluid">
                                <p>Trusted by <strong>300+ Amazon Sellers</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- about section start -->
        <section class="d2c_about_wrapper" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="d2c_img_container position-relative me-0 me-lg-5">
                            <div class="d2c_img_wrapper">
                                <img src="./assets/images/about_one.jpg" class="img-fluid w-100 rounded-3"
                                    alt="About Upper Image">
                            </div>
                            <div class="d2c_img_wrapper">
                                <img src="./assets/images/about_two.jpg" class="img-fluid w-100 rounded-3"
                                    alt="About Down Image">
                            </div>
                            <img src="./assets/images/about_shade.png" alt="About Background Image">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="d2c_sub_title position-relative">About <span>Tech2Globe</span></h3>
                        <h2 class="d2c_title position-relative">Leaders in Amazon Growth & Global <span>E-Commerce
                                Solutions</span> </h2>
                        <p class="mb-3">Tech2Globe is a leading Amazon managed services agency. For over a decade, we've
                            helped 300+ Amazon brands skyrocket their sales and profitability. We combine innovative
                            growth strategies with transparent communication & data-driven insights to deliver
                            exceptional results.</p>
                        <ul>
                            <li><i class="fas fa-hand-point-right"></i> 300+ Satisfied Clients Worldwide</li>
                            <li><i class="fas fa-hand-point-right"></i> 12+ Years of Experience</li>
                            <li><i class="fas fa-hand-point-right"></i> $250M+ Amazon Sales Managed</li>
                        </ul>
                        <a href="#home" class="btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- about section end -->










        <section class="d2c_service_wrapper newservice" id="service">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-8 mb-4 mb-xl-0">
                        <div class="text-center">
                            <h2 class="d2c_title position-relative">Get Your Free Amazon Store <span>PPC Health
                                    Check</span>
                            </h2>
                            <p>Avoid costly mistakes and uncover waye to increase sales & profit.</p>
                        </div>
                    </div>

                    <div class="col-xl-5 mb-4 mb-xl-0">
                        <div class="row">
                            <div class="col-md-10">
                                <ul>
                                    <li class="mb-3"><i class="fas fa-hand-point-right"></i> Ad Optimization
                                        Opportunities</li>
                                    <li class="mb-3"><i class="fas fa-hand-point-right"></i> Keyword Targeting
                                        Enhancements</li>
                                    <li class="mb-3"><i class="fas fa-hand-point-right"></i> Custom PPC Growth Strategy
                                    </li>
                                    <li><i class="fas fa-hand-point-right"></i> Competitor PPC Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5">
                        <img src="assets/images/ppc-health-image.webp" alt="PPC Health Check" class="img-fluid bwlight">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="cta_section pt-5 text-center">
                            <div class="btn-block-cta">
                                <a href="#home" class="btn">
                                    🔥 Get My Free Amazon PPC Audit
                                </a>
                            </div>
                            <div class="cmt text-center">
                                <small>No spam. No: obligation. Just insights to grow Amazon sales</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="faq py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-8 col-xl-8">
                        <h2 class="text-center faq-title">Frequently Asked Questions</h2>

                        <div class="accordion" id="faqAccordion">

                            <!-- Item 1 -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                        How long does the PPC audit take?
                                    </button>
                                </h2>
                                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        Usually within 24 hours.
                                    </div>
                                </div>
                            </div>

                            <!-- Item 2 -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#faq2">
                                        Do you work with small sellers?
                                    </button>
                                </h2>
                                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        Yes, we support brands at every stage.
                                    </div>
                                </div>
                            </div>

                            <!-- Item 3 -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#faq3">
                                        Do you manage Amazon DSP?
                                    </button>
                                </h2>
                                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        Yes, we offer full-service DSP campaign management.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- footer section start -->
        <footer class="d2c_footer_wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-8 mb-5 mb-lg-0 text-center">
                        <img src="./assets/images/footer_logo.png" class="d2c_footer_logo img-fluid w-100 mb-4"
                            alt="Footer Logo">
                        <p>Tech2Globe Web Solutions is a renowned solution-provider that was established in 2014 with
                            superior quality of our services, we have managed to carve out a coveted position for
                            ourselves in this fiercely competitive sector.</p>
                        <div class="award_wrapper d-flex justify-content-center gap-2">
                            <div class="award-block">
                                <img src="assets/images/advanced-partner.webp" alt="advanced-partner" class="img-fluid">
                            </div>
                            <div class="award-block">
                                <img src="assets/images/verified-partner.webp" alt="verified-partner" class="img-fluid">
                            </div>
                            <div class="award-block">
                                <img src="assets/images/spn-verified-partner.webp" alt="spn-verified-partner"
                                    class="img-fluid">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d2c_copy_wrapper">
                    <h4 class="text-center">© 2026 Tech2Globe | All Right Reserved</h4>
                    <!-- <a href="https://www.designtocodes.com/" target="_blank">DesignToCodes</a> -->
                </div>
            </div>
        </footer>
        <!-- footer section end -->

        <!--   Scroll Button Start   -->
        <!-- <div id="scrollBtn">
            <a href="#">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div> -->
        <!--   Scroll Button  End   -->

        <div id="sticky_button">
            <a href="#home" class="btn">
                🔥 Get Free PPC Audit
            </a>
            <div class="cmt text-center">
                <img src="assets/images/Stars.webp" alt="Stars" class="img-fluid">
                <p>Trusted by <strong>300+ Amazon Sellers</strong></p>
            </div>
        </div>
    </main>

<div class="modal fade iframevidcontainer" id="vidreviewOne" aria-labelledby="vidreviewOneLabel" tabindex="-1" aria-hidden="true" style="background:rgba(0,0,0,0.5);">
                <div class="modal-dialog modal-sm ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <figure class="video-container m-0">
                                <iframe width="100%" height="500px"
                                    src="https://www.youtube-nocookie.com/embed/CDI-QIfFhqM"
                                    title="Tech2Globe Boosts Amazon ROI with Strategic Account Management | #ecommercebusiness #shorts"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen=""
                                    loading="lazy"
                                    aria-label="YouTube video: Tech2Globe Boosts Amazon ROI with Strategic Account Management">
                                </iframe>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

    <!-- js cdn -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- bootstrap js -->
    <script src="./lib/bootstrap-5/js/bootstrap.bundle.min.js"></script>
    <!-- fancybox Image -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
    <!-- Slider JS Link -->
    <script src="./lib/slick-1.8.1/slick/slick.min.js"></script>
    <!-- main js -->
    <script src="./assets/js/main.js"></script>
</body>

</html>


<!-- 
    Template Name: {{Tech Start Pro}}
    Template URL: {{https://www.designtocodes.com/product/techstart-pro-responsive-bootstrap-landing-page/}}
    Description: {{TechStart Pro landing page is the definitive solution for businesses and individuals seeking a top-tier online presence. This responsive Bootstrap landing page is not just good-looking, it's also simple.}}
    Author: DesignToCodes
    Author URL: https://www.designtocodes.com
    Text Domain: {{ Tech Start Pro }}
 -->
