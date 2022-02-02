<?php
include __DIR__ . '/db.php';

header('Content-Type: application/json');

if (isset($_GET['query'])) {
    $query = $_GET['query'];
    if ($query == 'all') {
        echo json_encode(
            [
                'length' => count($cards),
                'response' => $cards
            ]
        );
    };
}
