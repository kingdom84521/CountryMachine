class Feature {
    constructor() {
        this.data = null
    }

    notify( data ) {
        this.data = data
        this.processor( this.data ) ;
    }

    processor( data ) {
        
    }
}

module.exports = { Feature }