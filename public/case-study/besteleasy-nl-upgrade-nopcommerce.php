<?php $caseStudyCategoryLink = "/case-studies/software-development";
$caseStudyCategory = "Software Development"; ?>
<!doctype html>
<html>

<?php include("../include/meta.php"); ?>
<?php include("../include/header.php"); ?>
<link href="./include/style.css" rel="stylesheet" />


<?php
include "../include/breadcrumb-case-study-services.php";
?>

<!-- Section 1 -->
<section class="container cartFeature inner-page-content new-content case-study-inner-page pt-0 mt-5">
    <div class="row">
        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
            <div class="main-banner-container software-development">
                <h1>Besteleasy.nl Revamp with nopCommerce</h1>
            </div>

            <div class="content-container">
                <div class="row my-2 text-center">
                    <div class="col-lg-4">
                        <img src="./img/ic-sales-increase.png" alt="" class="img-fluid" width="100px" height="100px">
                        <p class="text-primary mt-2 fw-bold">8% increase online sales growth</p>
                    </div>
                    <div class="col-lg-4">
                        <img src="./img/ic-chart.png" alt="" class="img-fluid" width="100px" height="100px">
                        <p class="text-primary mt-2 fw-bold">Used ASANA & integrate with CMS</p>
                    </div>
                    <div class="col-lg-4">
                        <img src="./img/ic-teams.png" alt="" class="img-fluid" width="100px" height="100px">
                        <p class="text-primary mt-2 fw-bold">Developed new plugins for this project</p>
                    </div>
                </div>
                <p>Besteleasy.nl based on Netherlands and offers best quality electronic gadgets in the entire location of Europe, especially wireless speakers, data cables & headphones.</p>
                <p>The company already had a website but the CMS it was based on had many issues & bugs affected the overall performance of the site and increase the page load speed. In addition, the mobile version needed to be improved. Client wanted to get the simple but effective and secure platform to transform the site.</p>
                <h3>Challenges</h3>
                <p>The project came with lots of tasks and challenges and having many bugs in the whole site. Our team of nopCommerce developers and designers invest loads of time and effort to transform the site into nopCommerce platform.</p>
                <p>Some of the challenges to completing the entire project:</p>
                <ul>
                    <li>As per Site Analytics Report, bounce rate was the biggest issue that our client faced. Our main objective is to create the user-friendly design that load fast and help to reduce bounce rate.</li>
                    <li>The structure of the mobile UX is to confuse or divert the visitor’s attention when they’re scrolling down important pages – typically the “purchase now” or “contact us”. To make navigation easier, we try to limit the length of the mobile page so visitors can more easily scroll to the bottom.</li>
                    <li>Data Migration was vital as well. Migrate the whole database into MS SQL Server with Entity Framework from My SQL Database as previously client used.</li>
                    <li>Built “Advanced Search Filter” and integrate with nopCommerce store.</li>
                    <li>Customize & integrate the “After Pay” payment gateway with the store as client only wanted to use this.</li>
                    <li>Provide the multi language support; add more languages in the store for localization support.</li>
                    <li>The biggest challenge for our team is to manage the schedule. Client wanted to get his new site and ready to use as soon as possible.</li>
                </ul>
                <h3>Solutions</h3>
                <p>Our goal is to revamped design that would streamline communication internally and a straightforward UX customer experience that aligned with their brand. This project required loads of efforts to planning and strategy to fully grasp the scope of design and development required.</p>
                <h3>Design & Mobile UX</h3>
                <p>nopExtensions crafted the brand new design that looks professionally everywhere including all kinds of mobile devices and not just on a desktop or a laptop. We built an optimal structure and improve the mobile UX that help to easy to navigate the store across various screen sizes.</p>
                <p>The team used front-end technology like: Bootstrap, JQuery & Ajax in order to improve the UI loading speed and mobile functionality. We use AMP (Accelerated Mobile Pages) to create mobile-friendly content that loads quickly on the site to make scrolling and navigation smoother.</p>
                <h3>Data Migration</h3>
                <p>Technology we used to migrate the data is Microsoft SQL Server with Entity Framework as nopCommerce uses the same, also called (ORM) Object Relation Mapper for Communicate to the database. In nopCommerce, mostly Database Operation work done by entity framework. We followed code first approach migration, write code first then use entity framework to generate the database from the C# classes.</p>
                <p>Steps we follow in Database Migration with Entity Framework.</p>
                <ul>
                    <li>
                        <p>First, we create entities and possibly changes in the existing entities like add new fields in existing product, categories & order based on our requirements using C#.
                        </p>
                        <p> The changes are done in Libraries; <br> <strong>Libraries=>Nop.Core=>Domain</strong>

                        </p>
                    </li>
                    <li>
                        <p>Based on requirement, we had some changes with mapping. We use fluent API to map with database rules and constraint like primary key, type of relationship between tables etc.
                        </p>
                        <p> The map Changes are done in Libraries <br> <strong>Libraries=>Nop.Data=>Mapping</strong>

                        </p>
                    </li>
                    <li>
                        <p>We also done some changes and add new services for read, write, update, delete the data in database. As our motive to separate all modules and services so that particular module can freely operate with affecting other module.
                        </p>
                        <p> The map Changes are done in Libraries <br> <strong>Libraries=>Nop.Services=></strong>

                        </p>
                    </li>
                </ul>
                <h3>Store Performance</h3>
                <p>We follow nopCommerce designs patterns and SOLID principles that help to increase the overall store performance, testability and maintainability.</p>
                <p>We also create unit-testing module for quick trace bugs and for better maintainability of application code.</p>
                <h3>Integrate Advanced Search Filter</h3>
                <a href="./img/besteleasy-1.jpg" data-glightbox="case-study">
                    <img src="./img/besteleasy-1.jpg" alt="Besteleasy" class="img-fluid my-2">
                </a>
                <p>Our team built an “Advanced Search Filter” that fulfills the client’s needs and integrates with new nopCommerce store. nopCommerce search filter work on basis of query. It gives the search result base on query that word match with the product name.</p>
                <a href="./img/besteleasy-2.jpg" data-glightbox="case-study">
                    <img src="./img/besteleasy-2.jpg" alt="Besteleasy" class="img-fluid my-2">
                </a>
                <p>The advanced search box enabled with “auto complete” search just searches the name and it will give you suggestions. It will also use Product Tag for search product. Our motive to add as many features that help users to find a relevant product with an ease so that any user can search products based on price range, product color and can filter the products based on manufacturers.</p>
                <h3>Customized & Integrate After Pay Gateway</h3>
                <p>Our team also customized the After Pay payment gateway as per the client’s need. It was pretty challenging to customize “after pay” for Netherlands only and integrated in store with other payment gateways, as nopCommerce feature to add multiple payment gateways.</p>
                <h3>Multilingual & Localization Support</h3>
                <p>The client also wanted to get his site ready in Dutch include English (by default). So keep the nopCommerce feature in mind to add multiple languages in the store, we suggest client to add more languages such as French & Italian to target the whole Europe.</p>
                <p>Our multilingual team came in existence to translate the entire content in the mentioned languages and integrated the store with website translation plugin.</p>
                <h3>Plugins Integration</h3>
                <p>We built some nopCommerce plugins of “Deal of the Day”, “Product Image Zoom” & “Social Login” and integrate with new nopCommerce store to enhance the store functionality that helps to provide an ease to navigate with the store.</p>
                <h3>Add more features</h3>
                <p>We used ASANA, customized and integrate with the store for generate proper reporting of daily orders and cancellation.</p>
                <p>In addition, client wanted to launch his new site ASAP as we do not have more time to finish the project. We defining modules and prioritizing task accordingly to our team so that we can complete the project under the given time-frame.</p>
                <h3>Result</h3>
                <p>The final store fulfills all the client needs what they wanted and covers all the APIs and perfectly integrated with the new payment gateway and plugins.</p>
                <p>AfterPay payment gateway working as a full version of payment gateway and secure with code. Finally developing a mobile responsive nopCommerce site giving easy access to customers anywhere on the desktop and mobile platforms. That generate results:</p>
                <ul>
                    <li>50% increase customer session on the store</li>
                    <li>12% increase in repeated customers monthly & 35% decrease bounce rate</li>
                    <li>50,000+ monthly visits from organic search & 8% sales growth</li>
                    <li>30-40% growth in website conversion rate after observation of 2 months</li>
                    <li>More than 40% of growth in paid search conversion rate</li>
                </ul>
                <h3>About Our Company:</h3>
                <p>nopExtensions is a certified nopCommerce solutions partner to provide effective solutions of nopCommerce CMS, Themes and Plugins. With having more than 4 years of experience in nopCommerce technologies, we deliver the 100% satisfy results to the clients across the globe.</p>
                <p>We offer multiple services include nopCommerce CMS, Web Development, Personalized Themes Creation, Plugins Development, eCommerce Store Migration, Version Upgrade Services and much more, which helps to improve the functionality and running a profitable eCommerce store. Along with, we can also customized your existing eCommerce store with nopCommerce technology as well as offer Product Data Management Services from Catalogue Management, Product Uploading to Product Pricing & Re-Pricing & Image Editing, from Product Category Management, Order Processing, Store Performance Management to Chat Support.</p>
            </div>
        </div>
        <?php include "./include/sidebar.php"; ?>
    </div>
    <?php include "./include/case-studies-software-development.php"; ?>
    <?php include "./include/competitive-advantage.php"; ?>
</section>

<?php include("../include/footer.php"); ?>