class Handler {
    constructor() {
        this.features = []
    }

    subscribe( feature ) {
        this.features.push( feature )
    }

    unsubscribe( feature ) {
        for ( index in this.features )
        {
            if ( feature === this.features[ index ] )
            {
                this.features.splice( index, 1 )
                break
            }
        }
    }

    preprocess( data ) {
        return data
    }

    emit( data ) {
        data = this.preprocess( data )

        for ( element of this.features )
        {
            element.notify( data )
        }
    }
}

module.exports = { Handler }