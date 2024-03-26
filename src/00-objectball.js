const gameObject = () => {
    let obj = {
        home : {
            teamName : 'Brooklyn Nets',
            colors : ['Black' , 'White'],
            players: {
            'Alan Anderson' : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,
         },
            'Reggie Evans' : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7,
         },
            'Brook Lopez' : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10, 
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15,
         }, 
            'Mason Plumlee' : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks : 5,
         },
             'Jason Terry' : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
         },
     },
 },
         away : {
         teamName : 'Charlotte Hornets',
         colors : ['Turquoise' , 'Purple'],
         players: {
             'Jeff Adrien' : {
                     number : 4,
                     shoe : 8,
                     points : 10,
                     rebounds : 1,
                     assists : 1,
                     steals : 2,
                     blocks : 7,
                     slamDunks : 2,
         },
             'Bismak Biyombo' : {
                     number : 0,
                     shoe : 16, 
                     points : 12,
                     rebounds : 4,
                     assists : 7,
                     steals : 7,
                     blocks : 15,
                     slamDunks : 10,
         },
              'DeSagna Diop' : {
                     number : 2,
                     shoe : 14,
                     points : 24,
                     rebounds : 12,
                     assists : 12, 
                     steals : 4,
                     blocks : 5,
                     slamDunks : 5,
         }, 
              'Ben Gordon' : {
                     number : 8,
                     shoe : 15,
                     points : 33,
                     rebounds : 3,
                     assists : 2,
                     steals : 1,
                     blocks : 1,
                     slamDunks : 0,
         },
              'Brendan Haywood' : {
                     number : 33,
                     shoe : 15,
                     points : 6,
                     rebounds : 12,
                     assists : 12,
                     steals : 22,
                     blocks : 5,
                    slamDunks : 12,
         },
      },
    },
  };
      return obj;
};

let object = gameObject();

function numPointsScored(name) {

    const player = object.home.players[name] || object.away.players[name];
    return player ? player.points : false;
};

function shoeSize(name) {

    const player = object.home.players[name] || object.away.players[name];
    return player ? player.shoe : false;
};

function teamColors(teamName) {

    if(object.home.teamName === teamName) {
        return object.home.colors;
    } else if(object.away.teamName === teamName) {
        return object.away.colors;
    } else {
        return false;
    }
};

function teamName() {

    let teams = [object.home.teamName, object.away.teamName];
        return teams;
};

function playerNumbers(teamName) {

    const players = object.home.teamName === teamName ? object.home.players : object.away.players;
    return Object.values(players).map(player => player.number);

};

function playerStats(playerName) {

    const player = object.home.players[playerName] || object.away.players[playerName];
    return player || null;

};

function bigShoeRebounds() {
   
    let maxShoeSize = 0;
    let maxShoeSizePlayerRebounds = 0;

    const allPlayers = { ...object.home.players, ...object.away.players };
    for (const player in allPlayers) {
        if (allPlayers[player].shoe > maxShoeSize) {
            maxShoeSize = allPlayers[player].shoe;
            maxShoeSizePlayerRebounds = allPlayers[player].rebounds;
        }
    }

    return maxShoeSizePlayerRebounds;
};

