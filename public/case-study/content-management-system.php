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
                <h1>Content Management System</h1>
            </div>

            <div class="content-container">
                <p>An online marketplace and job portal where accountants can find
                    temporary and contractual positions.</p>
                <h3>Goals</h3>
                <p>Our client had been an accountant for the last 10 years when he approached us to develop an automation of their staffing solutions. The client wanted us to build a one of a kind portal listing accountants in the United States where companies could hire them on a contractual basis. The portal is currently only available in 7 states. The platform would automate a system of background checks, payroll processing, candidate registration, client registration, verification processes, and others.
                </p>
                <h3>Challenges</h3>
                <ul>
                    <li><strong>Understanding Workflow:</strong> We needed to research how the staffing process in the U.S. is done along with what was needed to implement the background check mechanisms, finding and integrating an apt payroll and sales tax calculation module, and define an overtime calculation module.</li>
                    <li><strong>Discovery and Functionality:</strong> This would be an evolving project with understanding the concept and functionality in the discovery phase. Maintaining stability of the website needed to happen on a weekly basis.</li>
                    <li><strong>Selecting API’s and defining rules:</strong> The website needed custom rules defined to setup online live interviews. API’s needed to be selected to fix bid to resource allocations. Too many integrated API’s might impact the speed and performance of the site.</li>
                </ul>
                <h3>Solution and Execution</h3>
                <ul>
                    <li><strong>Dedicated Resources Allocated:</strong> A dedicated team was set up to provide timely reporting by an account manager, project manager, senior designer, HTML developer, senior developer, and a testing analyst. An agile development process was used with an intense discovery phase.</li>
                    <li><strong>Feature Implementation:</strong> The website was designed with a custom online job portal using the MVC framework, an automated was added for background checks, payroll processing, and others, a resume parser tool was integrated on the website for the candidates to auto fill the registration form for easy registrations.</li>
                    <li><strong>Scalability, Compatibility, and UI:</strong> We focused the design on the user interface, making the site SEO friendly, and keeping in mind scalability and the addition of future modules. Third party integration of candidate information such as skills tests, LinkedIn profiles, e- signatures, and others. Cross browser testing was done and mobile platform compatibility. Ongoing maintenance is provided.</li>
                </ul>
            </div>
        </div>
        <?php include "./include/sidebar.php"; ?>
    </div>
    <?php include "./include/case-studies-software-development.php"; ?>
    <?php include "./include/competitive-advantage.php"; ?>
</section>

<?php include("../include/footer.php"); ?>