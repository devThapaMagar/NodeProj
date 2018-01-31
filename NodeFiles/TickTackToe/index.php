<?php
$localhost = 'http://'.$_SERVER['HTTP_HOST'];
$bImg = $localhost.'/NodeProj/NodeFiles/_include/img/b.png'
// echo $_SERVER['REMOTE_ADDR'];
?>
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<style type="text/css">
		table {
		width: 500px;
		border-collapse: collapse;
		}
		td {
		width: 33.333%;
		border: 6px solid #222;
		}
		td::after {
		content: '';
		display: block;
		/*margin-top: 100%;*/
		}
		td:first-of-type {
		border-left-color: transparent;
		border-top-color: transparent;
		}
		td:nth-of-type(2) {
		border-top-color: transparent;
		}
		td:nth-of-type(3) {
		border-right-color: transparent;
		border-top-color: transparent;
		}
		tr:nth-of-type(3) td {
		border-bottom-color: transparent;
		}
		</style>
		<link rel="stylesheet" href="<?php echo $localhost; ?>/NodeProj/NodeFiles/_include/css/bootstrap.min.css">
		<script src="<?php echo $localhost; ?>/NodeProj/NodeFiles/_include/js/jquery-3.3.1.min.js" ></script>
		<script src="<?php echo $localhost; ?>/NodeProj/NodeFiles/_include/js/bootstrap.min.js" ></script>
		<script src="<?php echo $localhost; ?>/NodeProj/NodeFiles/node_modules/socket.io-client/dist/socket.io.js"></script>
		<!-- <script type="text/javascript" src="_node/node-client/function.js"></script> -->
		<script type="text/javascript" src="_node/node-client/event.js"></script>
		<script type="text/javascript" src="_node/node-client/node-client.js"></script>
		<script type="text/javascript" src="_node/node-client/main.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row justify-content-md-center" id="user-blk">
				<div class="col-md-auto">
					<form >
						<div class="row">
							<div class="form-group">
								<input type="text" class="form-control" id="user_name" aria-describedby="userNameHelp" placeholder="Enter Enter Usernme">
							</div>
						</div>
						<div class="row justify-content-md-center">
							<button class="btn btn-primary" id="submitBtn">Submit</button>
						</div>
					</form>
				</div>
			</div>
			<div class="row justify-content-md-center" id="tictactoe-blk">
				<div class="col-md-auto">
					<div class="row" id="information-blk">
					</div>
					<div class="row">
						<table id="board">
							<tr>
								<td class = 'td-cls-1' id = 'x-1_y+1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-2' id = 'x+0_y+1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-3' id = 'x+1_y+1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
							</tr>
							<tr>
								<td class = 'td-cls-4' id = 'x-1_y+0'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-5' id = 'x+0_y+0'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-6' id = 'x+1_y+0'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
							</tr>
							<tr>
								<td class = 'td-cls-7' id = 'x-1_y-1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-8' id = 'x+0_y-1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
								<td class = 'td-cls-9' id = 'x+1_y-1'><span><img src='<?php echo $bImg; ?>' class='img-fluid'/></span></td>
							</tr>
						</table>
						
					</div>
				</div>
			</div>
		</body>
	</html>