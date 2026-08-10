<?php $caseStudyCategoryLink = "/case-studies/data-management";
$caseStudyCategory = "Data Management"; ?>
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
            <div class="main-banner-container data-management">
                <h1>Data Extraction services</h1>
            </div>

            <div class="content-container">
                <h3>Challenge</h3>
                <p>Client was not able to extract the customer data from the portal.
                </p>
                <h3>Solution
                </h3>
                <ul>
                    <li>Reviewing the customer account and classified the data.
                    </li>
                    <li>Created a database of existing customers in SQL and streamlined the process to ensure the new
                        customers are getting entered correctly in the new database.
                    </li>
                    <li>Using ticketing approach through Trello, maintained 2 layers of QC with in house team and
                        client pre approval of the data
                    </li>
                    <li>Created weekly, monthly, quarterly and annual report for more transparent data.</li>
                </ul>
                <h3>Result</h3>
                <p>Client has customer base of more than 10,000 customer accounts and client is able to find out major
                    business aspects using the database. </p>
            </div>
        </div>
        <?php include "./include/sidebar.php"; ?>
    </div>
    <?php include "./include/case-studies-data-management.php"; ?>
    <?php include "./include/competitive-advantage.php"; ?>
</section>

<?php include("../include/footer.php"); ?>