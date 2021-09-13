var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInsert").addEventListener("click", app.insert)
    },

    insert: function() {
        var db = firebase.firestore();
        var collection = document.title.slice(10);
        var ag = db.collection(collection);
        
        let cnome = document.getElementById("nameInput").value;
        let ctelefone = document.getElementById("adressInput").value;
        let corigem = document.getElementById("stateInput").value;
        let cdata = document.getElementById("dateInput").value;
        let cobservacao = document.getElementById("obsInput").value;    
        
        ag.add({
            nome: cnome,
            telefone: ctelefone,
            origem: corigem,
            data_contato: cdata,
            observacao: cobservacao
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }

}

app.initialize();