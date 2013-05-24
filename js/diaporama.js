/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	function Diaporama(id_diapo, imga_size) {
		this.id_diapo = id_diapo;
		this.img_size = imga_size;
		this.nb_diapo = $("#" + id_diapo + " ul li").size();
		this.state = 0;
		this.id_button = null;

		//Methods
		this.previousDiapo = previousDiapo;
		this.nextDiapo = nextDiapo;
		this.manageEvents = manageEvents;
		this.addbuttons = addbuttons;
		this.eventsButton = eventsButton;
		this.changeDiapo = changeDiapo;
	}

	function addbuttons() {
		/*$("#" + this.id_diapo + " ul li").each(
		 function (index) {
		 $("#liste_actualite").css('margin-left', "-"+this.img_size*index+"px")
		 });*/
		for (var i = 0; i < this.nb_diapo; i++) {
			$('<img class="bouton_diapo" id="button_' + this.id_diapo + "_" + i + '" src="images/icons/bgTabsActu.png" alt=""/>').appendTo("#boutons_" + this.id_diapo);
			;
		}
	}

	function eventsButton() {
		var myDiapo = this;
		$("#" + this.id_diapo + ">#boutons_" + this.id_diapo + ">img").click(function() {
			var ids = $(this).attr('id').split('_');
			myDiapo.id_button = ids[3];
			myDiapo.changeDiapo();

		});
	}

	function nextDiapo() {
		if (this.state > -this.nb_diapo + 1) {
			this.state--;
			$("#liste_actualite_" + this.id_diapo).animate({left: "-=" + this.img_size + 'px'}, 500);
		}
	}

	function previousDiapo() {
		if (this.state !== 0) {
			this.state++;
			$("#liste_actualite_" + this.id_diapo).animate({left: "+=" + this.img_size + 'px'}, 500);
		}
	}

	function changeDiapo() {
		var imgsize = this.img_size;
		
		var move = (((this.state * (-1)) - this.id_button) * imgsize);
		$("#liste_actualite_" + this.id_diapo).animate({left: "+=" + move + 'px'}, 500);
		this.state = -this.id_button;
	}

	function manageEvents() {
		var myDiapo = this;
		$("#fleche_gauche_" + this.id_diapo).click(function() {
			myDiapo.previousDiapo();
		});

		$("#fleche_droite_" + this.id_diapo).click(function() {
			myDiapo.nextDiapo();
		});
	}

	$(".diapo").each(function(index) {
		$(this).attr("id", "diapo_" + index);
		$("#diapo_" + index + ">.boutons_diapo").attr("id", "boutons_diapo_" + index);
		$("#diapo_" + index + ">.fleches_diapo>.fleche_gauche").attr("id", "fleche_gauche_diapo_" + index);
		$("#diapo_" + index + ">.fleches_diapo>.fleche_droite").attr("id", "fleche_droite_diapo_" + index);
		$("#diapo_" + index + ">.liste_actualite").attr("id", "liste_actualite_diapo_" + index);
		var d1 = new Diaporama("diapo_" + index, 200);
		d1.manageEvents();
		d1.addbuttons();
		d1.eventsButton();
	})




});