<?php
include "all-case-studies.php";
$csItems = $caseStudies["Digital Marketing"];
?>
<link rel="stylesheet" href="./include/case-study-card.css">

<h2 class="text-center mt-5">More Case Studies on Digital Marketing</h2>
<div class="row my-5 more-case-study-section">
    <?php
    // Get the current URL path
    $currentUrl = $_SERVER['REQUEST_URI'];

    // Find and remove the current case study from the array
    $filteredCaseStudies = [];
    $currentCaseStudy = null;

    foreach ($csItems as $index => $caseStudy) {
        if ($caseStudy['link'] == $currentUrl) {
            $currentCaseStudy = $caseStudy; // Store the current case study
        } else {
            $filteredCaseStudies[] = $caseStudy; // Add other case studies
        }
    }

    // Ensure only three are shown
    $displayCaseStudies = array_slice($filteredCaseStudies, 0, 3);

    // If there are 3 or fewer case studies, include the current one at the end
    if (count($filteredCaseStudies) < 3 && $currentCaseStudy !== null) {
        $displayCaseStudies[] = $currentCaseStudy;
    }

    // Display the case studies
    foreach ($displayCaseStudies as $caseStudy):
    ?>
          <div class="col-md-4 col-sm-6 col-xs-12  mb-4">
            <div class="case-study-card">
                <div class="case-study-image d-flex justify-content-center align-items-center digital-marketing">
                    <h2 class="case-study-title"><?php echo $caseStudy['title']; ?></h2>
                </div>
                <div class="case-study-content text-start">
                    <p class="case-study-excerpt m-0"><?php echo $caseStudy['desc']; ?>
                    </p>
                </div>
                <div class="case-study-card-footer text-start">
                    <a href="<?php echo $caseStudy['link']; ?>" class="read-more"  aria-label="Read more about <?php echo $caseStudy['title']; ?>">Read More</a>
                </div>
            </div>
        </div>
    <?php endforeach; ?>

    <?php if (count($filteredCaseStudies) > 3): ?>
        <div class="col-12 text-center mt-4">
            <a href="/case-studies/digital-marketing"><button class="btn btn-danger">More Case Studies <i class="fa-solid fa-angles-right"></i></button></a>
        </div>
    <?php endif; ?>
</div>

<h2 class="text-center mt-5">Explore Other Case Studies</h2>
<div class="row my-5 more-case-study-section">
    <?php
    // Collect all case studies from other categories
    $otherCaseStudies = [];
    foreach ($caseStudies as $category => $items) {
        if ($category !== "Ecommerce") { // Exclude current category
            foreach ($items as $item) {
                // Add category to each case study item
                $item['category'] = $category;
                $otherCaseStudies[] = $item;
            }
        }
    }

    // Shuffle and pick three random case studies
    shuffle($otherCaseStudies);
    $randomCaseStudies = array_slice($otherCaseStudies, 0, 3);

    // Display three random case studies from other categories
    foreach ($randomCaseStudies as $caseStudy):
        // Convert category to lowercase and replace spaces with hyphens
        $categoryClass = strtolower(str_replace(' ', '-', $caseStudy['category']));
    ?>
        <div class="col-md-4 col-sm-6 col-xs-12  mb-4">
            <div class="case-study-card">
                <div class="case-study-image d-flex justify-content-center align-items-center <?php echo $categoryClass; ?>">
                    <h2 class="case-study-title"><?php echo $caseStudy['title']; ?></h2>
                </div>
                <div class="case-study-content text-start">
                    <p class="case-study-excerpt m-0"><?php echo $caseStudy['desc']; ?>
                    </p>
                </div>
                <div class="case-study-card-footer text-start">
                    <a href="<?php echo $caseStudy['link']; ?>" class="read-more"  aria-label="Read more about <?php echo $caseStudy['title']; ?>">Read More</a>
                </div>
            </div>
        </div>
    <?php
    endforeach;
    ?>

    <div class="col-12 text-center mt-4">
        <a href="/case-studies/"><button class="btn btn-danger">More Case Studies <i class="fa-solid fa-angles-right"></i></button></a>
    </div>
</div>