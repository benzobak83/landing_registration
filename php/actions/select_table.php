<?php 
require_once 'login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if  ($conn->connect_error) die ('connect Error');

$name_table = 'cats';
$query = 'SELECT * FROM '.$name_table;
$result = $conn -> query($query);
if (!$result) die ('error select from '.$name_table);

$rows = $result -> num_rows;

echo ("<table> <tr><th>Id</th> <th>Family</th> <th>Name</th> <th>Age</th></tr>");

for ($i = 0; $i < $rows; ++$i) {
    $row = $result -> fetch_array(MYSQLI_NUM);
    echo('<tr>');
    for ($j = 0; $j < 4; ++$j) {
        echo("<td>".htmlspecialchars($row[$j]).'</td>');
    }
    echo('</tr>');
}
echo('</table>');
?>