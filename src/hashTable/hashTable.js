class HashTable {
    constructor( size ) {
        this.data = new Array( size )
    }

    hashMethod ( key ) {
        let hash = 0
        for ( let i = 0; i < key.length; i++ ) {
            hash = ( hash + key.charCodeAt( i ) * i ) % this.data.length
        }
        return hash
    }

    set ( key, value ) {
        const address = this.hashMethod( key )
        if ( !this.data[address] ) {
            this.data[address] = []
        }
        this.data[address].push( [key, value] )
        return this.data
    }

    get ( key ) {
        const address = this.hashMethod( key )
        const currentBucket = this.data[address]
        if ( currentBucket ) {
            for ( let i = 0; i < currentBucket.length; i++ ) {
                if ( currentBucket[i][0] === key ) {
                    return currentBucket[i][1]
                }

            }
        }
        return undefined
    }

    getKeys () {
        const keys = []
        console.log(this.data.length);
        for ( let i = 0; i < this.data.length; i++ ) {
            if ( this.data[i] ) {
                console.log( this.data[i].length );

                for ( let j = 0; j < this.data[i].length; j++ ) {
                    keys.push( this.data[i][j][0] );
                }
            }

        }
        return keys
    }

    delete ( key ) {
        const address = this.hashMethod( key )
        const currentBucket = this.data[address]
        if ( currentBucket ) {
            const currentDelete = this.get( key )
            delete this.data[address]
            return currentDelete
        }
        return undefined
    }

}

const myHashTable = new HashTable( 10 )
myHashTable.set( "Duvan", 1997 )
myHashTable.set( "Juan", 3000 )
myHashTable.set( "Pedro", 2000 )

myHashTable.get( "Duvan" )