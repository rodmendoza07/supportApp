<?php

	

	$cmdOpt = $_POST["cmdOpt"];

	function InsertUsuario() {
		try {
			
			include "e006dd74f031a46ed1973df4deba70a1.php";

			$nombre = $_POST["nombresUsuario"];
			$apaternoUsuario = $_POST["apaternoUsuario"];
			$amaternoUsuario = $_POST["amaternoUsuario"];
			$emailUsuario = $_POST["emailUsuario"];
			$userName = $_POST["userName"];
			$passwdUser = $_POST["passwdUser"];

			$encrypt = md5($passwdUser.$userName);
			$dataInsert = "'".$nombre."','".$apaternoUsuario."','".$amaternoUsuario."','".$emailUsuario."','".$userName."','".$encrypt."'";
			$dataInsert = utf8_decode($dataInsert);

			$query = "INSERT INTO usuarios (nombres,apaterno,amaterno,email,user_name,password) ";
			$query .= "VALUES (".$dataInsert.")";
			$conecta->query($query);
			$conecta->close();

			return true;

		} catch (Exception $e) {
			
			return "Error en la inserción de usuarios -- ".$e;
		}
		
	}

	function MuestraUsuario() {
		try {
			include "e006dd74f031a46ed1973df4deba70a1.php";

			$query = "SELECT id_usuarios,nombres,apaterno,amaterno,email,user_name FROM usuarios";
			$consulta = $conecta->query($query);
			$jsonFile = array();
			//$i = 0;

			while ($row = $consulta->fetch_array(MYSQLI_ASSOC)) {

				$jsonFile[] = array_map('utf8_encode',$row);
			//	$i++;
			}

			$conecta->close();

			$jsonFile = json_encode($jsonFile);

			return $jsonFile;

		} catch (Exception $e) {
			return "Error en la consulta de usuarios -- ".$e;
		}
		
	}

	switch ($cmdOpt) {
		case 'cmdOpt=insert':
			$inserta = InsertUsuario();

			if ($inserta ==  true) {
				$respuesta = MuestraUsuario();
			} 

			else {
				$respuesta = $inserta;
			}

			break;
		
		case 'cmdOpt=selectUser':
			$respuesta = MuestraUsuario();
			break;

		default:
			echo "nada";
			break;
	}

	echo $respuesta;
?>