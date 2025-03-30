<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $title = htmlspecialchars($_POST['title']);
    $description = htmlspecialchars($_POST['description']);

    $to = "cylcomputerscontact@gmail.com";
    $subject = "New Report Submitted: " . $title;
    $message = "You have received a new report:\n\n";
    $message .= "Name: " . $name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Title: " . $title . "\n";
    $message .= "Description: " . $description . "\n";

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>
                document.getElementById('popup').style.display = 'block';
              </script>";
    } else {
        echo "<script>
                alert('Failed to send report. Please try again.');
                window.location.href = 'report.cylcomputersbd.html';
              </script>";
    }
}
?>