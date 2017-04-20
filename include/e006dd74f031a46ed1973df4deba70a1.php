<?php
		 $s = "localhost";
		 $u = "root";
		 $p = "";
		 $b = "registro";

		$conecta = new mysqli($s, $u, $p, $b);

		if ($conecta->connect_errno) {
		   	echo "Fallo al conectar a MySQL: (" . $conecta->connect_errno . ") " . $conecta->connect_error;
		   	$conecta->close();
		}		
?>