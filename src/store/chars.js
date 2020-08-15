import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// Store counters .
// Store Tiers .
// Store values which are not return from the API but they are still valuable for us.

export const charsData = new Vuex.Store({
    state: {
        chars : {

            1 : {
                Name : 'Bayonetta',
                Tier : 'Mid',
                isStrong : ['Ganondorf', 'KingDedede', 'Ridley', 'KingKRool'],
                isWeak : ['Lucario', 'Pichu', 'YoungLink', 'Pikachu']
            },

            2 : {
                Name : 'Bowser',
                Tier : 'Mid+',
                isStrong : ['YoungLink', 'DarkSamus', 'Pikachu', 'Samus'],
                isWeak : ['Jigglypuff', 'Kirby', 'Charizard', 'LittleMac']
            },

            3 : {
                Name : 'Bowserjr',
                Tier : 'Low',
                isStrong : ['Link', 'Wolf', 'Pikachu', 'Palutena'],
                isWeak : ['Ganondorf', 'Jigglypuff', 'Ryu', 'LittleMac'],
            },
            
            5 : {
                Name : 'Charizard',
                Tier : 'High',
                isStrong : ['Kirby', 'PiranhaPlant', 'Jigglypuff', 'MrGameWatch'],
                isWeak : ['Pichu', 'Ike', 'Link', 'Sonic']
            },
            
            61 : {
                Name : 'Chrom',
                Tier : 'High',
                isStrong : ['DonkeyKong', 'Ganondorf', 'Charizard', 'Bowser'],
                isWeak : ['Squirtle', 'Pikachu', 'Inkling', 'YoungLink']
            },
            
            6 : {
                Name : 'Cloud',
                Tier : 'Mid+',
                isStrong : ['Jigglypuff', 'Yoshi', 'LittleMac', 'KingKRool'],
                isWeak : ['Pikachu', 'Shulk', 'Wolf', 'Inkling']
            },
            
            7 : {
                Name : 'Corrin',
                Tier : 'Low',
                isStrong : ['Jigglypuff', 'Ganondorf', 'LittleMac', 'Incineroar'],
                isWeak : ['Samus', 'DarkSamus', 'Simon', 'Joker']
            },
            
            60 : {
                Name : 'Daisy',
                Tier : 'Top',
                isStrong : ['LittleMac', 'DonkeyKong', 'KingDedede', 'Jigglypuff'],
                isWeak : ['Cloud', 'Shulk', 'Wolf', 'RosalinaLuma']
            },
            
            8 : {
                Name : 'DarkPit',
                Tier : 'Low',
                Attr : {
                    AirFriction : '0.014',
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    WalkSpeed : '1.06',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isStrong : ['Ganondorf', 'Chrom', 'DonkeyKong', 'MegaMan'],
                isWeak : ['Bowser Jr.', 'Ike', 'Pichu', 'Pikachu']
            },
            
            9 : {
                Name : 'DiddyKong',
                Tier : 'Mid',
                isStrong : ['Ganondorf', 'DonkeyKong', 'Ridley', 'DrMario'],
                isWeak : ['Pikachu', 'Pichu', 'Rob', 'Wolf']
            },
            
            10 : {
                Name : 'DonkeyKong',
                Tier : 'Low',
                Attr : {
                    FallSpeed : '1.63',
                    FullHop : '34',
                    Weight : '127',
                    RunSpeed : '1.873',
                    Gravity : '0.085',
                },
                isStrong : ['Ganondorf', 'Incineroar', 'LittleMac', 'Charizard'],
                isWeak : ['Pichu', 'Pikachu', 'Richter', 'Samus']
            },
            
            
            4 : {
                Name : 'CaptainFalcon',
                Tier : 'Low+',
                Attr : {
                    FallSpeed : '1.865',
                    FullHop : '37.31',
                    Weight : '104',
                    RunSpeed : '2.552',
                    Gravity : '0.0769',
                },
                isStrong : ['Charizard', 'KingKRool', 'DonkeyKong', 'Bowser'],
                isWeak : ['Pikachu', 'Pichu', 'Lucina', 'Shulk']
            },
            
            11 : {
                Name : 'DrMario',
                Tier : 'Low',
                Attr : {
                    FallSpeed : '1.5',
                    FullHop : '30.8805',
                    Weight : '98',
                    RunSpeed : '1.397792',
                    Gravity : '0.087',
                },
                isStrong : ['DonkeyKong', 'LittleMac', 'KingDedede', 'KingKRool'],
                isWeak : ['Palutena', 'Lucina', 'Marth', 'Ike']
            },
            
            12 : {
                Name : 'DuckHunt',
                Tier : 'Mid',
                Attr : {
                    FallSpeed : '1.65',
                    FullHop : '34',
                    Weight : '86',
                    RunSpeed : '1.793',
                    Gravity : '0.076',
                },
                isStrong : ['Incineroar', 'Ganondorf', 'Bowser', 'Ridley'],
                isWeak : ['Zelda', 'Cloud', 'Pichu', 'Pikachu']
            },
            
            13 : {
                Name : 'Falco',
                Tier : 'Mid',
                isStrong : ['KingKRool', 'Simon', 'Richter', 'KingDedede'],
                isWeak : ['Pichu', 'Pikachu', 'Greninja', 'Game and Watch']
            },
            
            14 : {
                Name : 'Fox',
                Tier : 'High',
                isStrong : ['DarkSamus', 'Samus', 'KingKRool', 'Ridley'],
                isWeak : ['Lucina', 'Pikachu', 'Rob', 'Pichu']
            },
            
            15 : {
                Name : 'Ganondorf',
                Tier : 'Low',
                isStrong : ['Ryu', 'LittleMac', 'Kirby', 'Incineroar'],
                isWeak : ['Richter', 'Ness', 'Snake', 'YoungLink']
            },
            
            16 : {
                Name : 'Greninja',
                Tier : 'High',
                isStrong : ['LittleMac', 'DonkeyKong', 'Incineroar', 'Cloud'],
                isWeak : ['YoungLink', 'Snake', 'Palutena', 'Sonic']
            },
            
            75 : {
                Name : 'Hero',
                Tier : 'Mid',
                Attr : {
                    FallSpeed : '1.57',
                    FullHop : '29',
                    Weight : '101',
                    RunSpeed : '1.84',
                    Gravity : '0.094',
                },
                isStrong : ['Ganondorf', 'Incineroar', 'MegaMan', 'Ryu'],
                isWeak : ['Roy', 'Pikachu', 'Fox', 'Rob']
            },
            
            17 : {
                Name : 'Ike',
                Tier : 'Mid',
                isStrong : ['Jigglypuff', 'KingKRool', 'Kirby', 'Ganondorf'],
                isWeak : ['Pichu', 'YoungLink', 'Palutena', 'Simon']
            },
            
            59 : {
                Name : 'Incineroar',
                Tier : 'Low',
                isStrong : ['KingKRool', 'DonkeyKong', 'Bowser', 'Jigglypuff'],
                isWeak : ['Richter', 'Simon', 'Lucas', 'Pikachu']
            },
            
            62 : {
                Name : 'Inkling',
                Tier : 'High',
                isStrong : ['Ganondorf', 'CaptainFalcon', 'DonkeyKong', 'Ridley'],
                isWeak : ['Lucina', 'Rob', 'Marth', 'Cloud']
            },
            
            72 : {
                Name : 'Ivysaur',
                Tier : 'Top',
                isStrong : ['LittleMac', 'Rob', 'Snake', 'KingDedede'],
                isWeak : ['MegaMan', 'Palutena', 'Wolf', 'YoungLink']
            },
            
            18 : {
                Name : 'Jigglypuff',
                Tier : 'Low',
                isStrong : ['KingKRool', 'DonkeyKong', 'Bowser', 'Ganondorf'],
                isWeak : ['Ike', 'Lucina', 'Marth', 'Chrom']
            },
            
            74 : {
                Name : 'Joker',
                Tier : 'Top',
                 Attr : {
                    FullHop : '32.5',
                    Gravity : '0.127',
                    RunSpeed : '2.06',
                    FallSpeed : '1.63',
                    Weight : '93',
                },
                isStrong : ['LittleMac', 'DonkeyKong', 'Ganondorf', 'Ridley'],
                isWeak : ['Pikachu', 'Lucina', 'Inkling', 'Pichu']
            },
            
            70 : {
                Name : 'Ken',
                Tier : 'Mid+',
                isStrong : ['KingKRool', 'Charizard', 'KingDedede', 'DonkeyKong'],
                isWeak : ['Ness', 'Pikachu', 'Pichu', 'YoungLink']
            },
            
            19 : {
                Name : 'KingDedede',
                Tier : 'Low',
                isStrong : ['Ganondorf', 'LittleMac', 'Incineroar', 'DonkeyKong'],
                isWeak : ['Palutena', 'Pikachu', 'Zelda', 'Pichu']
            },
            
            20 : {
                Name : 'Kirby',
                Tier : 'Low',
                isStrong : ['LittleMac', 'DonkeyKong', 'Incineroar', 'Bowser'],
                isWeak : ['Ike', 'Lucina', 'Chrom', 'Roy']
            },
            
            21 : {
                Name : 'Link',
                Tier : 'Mid+',
                isStrong : ['KingKRool', 'Ganondorf', 'Icineroar', 'Jigglypuff'],
                isWeak : ['Pikachu', 'Wolf', 'Pichu', 'Falco']
            },
            
            22 : {
                Name : 'LittleMac',
                Tier : 'Low',
                isStrong : ['Lucario', 'Ganondorf', 'Charizard', 'Bowser'],
                isWeak : ['Ridley', 'Isabelle', 'Palutena', 'DarkPit']
            },
            
            23 : {
                Name : 'Lucario',
                Tier : 'Low+',
                isStrong : ['LittleMac', 'Sheik', 'Bayonetta', 'KingDedede'],
                isWeak : ['Bowser', 'Lucina', 'Joker', 'Ness']
            },
            
            24 : {
                Name : 'Lucas',
                Tier : 'Mid',
                isStrong : ['Ganondorf', 'KingKRool', 'LittleMac', 'Snake'],
                isWeak : ['Peach', 'Palutena', 'Lucina', 'Cloud']
            },
            
            25 : {
                Name : 'Lucina',
                Tier : 'High',
                isStrong : ['Kirby', 'Ganondorf', 'Charizard', 'LittleMac'],
                isWeak : ['YoungLink', 'Snake', 'MegaMan', 'Inkling']
            },
            
            26 : {
                Name : 'Luigi',
                Tier : 'Mid',
                isStrong : ['Ganondorf', 'DonkeyKong', 'LittleMac', 'Bowser'],
                isWeak : ['YoungLink', 'Samus', 'DarkSamus', 'Lucina']
            },
            
            27 : {
                Name : 'Mario',
                Tier : 'High',
                isStrong : ['KingKRool', 'Chrizard', 'Bowser', 'Ridley'],
                isWeak : ['Lucina', 'Marth', 'Shulk', 'Cloud']
            },
            
            28 : {
                Name : 'Marth',
                Tier : 'Mid',
                isStrong : ['LittleMac', 'Ganondorf', 'Kirby', 'DonkeyKong'],
                isWeak : ['YoungLink', 'Snake', 'Inkling', 'ToonLink']
            },
            
            29 : {
                Name : 'MegaMan',
                Tier : 'High',
                Attr : {
                    FullHop : '32.8',
                    Gravity : '0.107',
                    RunSpeed : '1.602',
                    FallSpeed : '1.8',
                    Weight : '102',
                },
                isStrong : ['KingDedede', 'Ridley', 'Ganondorf', 'DonkeyKong'],
                isWeak : ['Wolf', 'Olimar', 'Fox', 'Pikachu']
            },
            
            30 : {
                Name : 'MetaKnight',
                Tier : 'Low+',
                isStrong : ['LittleMac', 'DrMario', 'Squirtle', 'Sonic'],
                isWeak : ['MegaMan', 'Cloud', 'Joker', 'Ness']
            },
            
            32 : {
                Name : 'MiiBrawler',
                Tier : 'Low+',
                Attr : {
                    FullHop : '35',
                    Gravity : '0.169',
                    RunSpeed : '1.92',
                    FallSpeed : '1.92',
                    Weight : '94',
                },
                isStrong : ['KingKRool', 'BowserJr', 'Rob', 'Bayonetta'],
                isWeak : ['Palutena', 'Richter', 'Pichu', 'MegaMan']
            },
            
            33 : {
                Name : 'MiiGunner',
                Tier : 'Low',
                Attr : {
                    FullHop : '30.9',
                    Gravity : '0.098',
                    RunSpeed : '1.37',
                    FallSpeed : '1.45',
                    Weight : '104',
                },
                isStrong : ['Ganondorf', 'LittleMac', 'Cloud', 'Ryu'],
                isWeak : ['Ness', 'Joker', 'Sonic', 'Olimar']
            },
            
            34 : {
                Name : 'MiiSwordfighter',
                Tier : 'Low+',
                Attr : {
                    FullHop : '28.3',
                    Gravity : '0.106',
                    RunSpeed : '1.58',
                    FallSpeed : '1.55',
                    Weight : '100',
                },
                isStrong : ['Ganondorf', 'DonkeyKong', 'Incineroar', 'LittleMac'],
                isWeak : ['Pichu', 'Palutena', 'Sonic', 'Fox']
            },
            
            35 : {
                Name : 'MrGameWatch',
                Tier : 'High',
                isStrong : ['Ness', 'Lucas', 'Snake', 'Pikachu'],
                isWeak : ['Ike', 'Cloud', 'Shulk', 'Marth']
            },
            
            36 : {
                Name : 'Ness',
                Tier : 'Mid+',
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'KingKRool'],
                isWeak : ['YoungLink', 'Lucina', 'Palutena', 'Link']
            },
            
            37 : {
                Name : 'Olimar',
                Tier : 'High',
                isStrong : ['Pichu', 'Incineroar', 'LittleMac', 'KingKRool'],
                isWeak : ['Rob', 'Shulk', 'Daisy', 'Wolf']
            },
            
            38 : {
                Name : 'PAC-MAN',
                Tier : 'High',
                isStrong : ['LittleMac', 'Ganondorf', 'DonkeyKong', 'Ridley'],
                isWeak : ['Fox', 'Palutena', 'Falco', 'Zelda']
            },
            
            39 : {
                Name : 'Palutena',
                Tier : 'Top',
                isStrong : ['Ridley', 'KingDedede', 'KingKRool', 'Ganondorf'],
                isWeak : ['Pichu', 'Pikachu', 'Inkling', 'Greninja']
            },
            
            40 : {
                Name : 'Peach',
                Tier : 'Top',
                isStrong : ['LittleMac', 'Bowser', 'Mario', 'KingKRool'],
                isWeak : ['Lucina', 'Link', 'Joker', 'Cloud']
            },
            
            64 : {
                Name : 'Pichu',
                Tier : 'Mid+',
                isStrong : ['Ganondorf', 'KingKRool', 'DonkeyKong', 'Bowser'],
                isWeak : ['Lucina', 'Snake', 'Marth', 'Chrom']
            },
            
            41 : {
                Name : 'Pikachu',
                Tier : 'Top',
                isStrong : ['KingKRool', 'Ganondorf', 'DonkeyKong', 'Incineroar'],
                isWeak : ['Ness', 'MrGameWatch', 'Peach', 'Daisy']
            },
            
            69 : {
                Name : 'PiranhaPlant',
                Tier : 'Low+',
                isStrong : ['Bayonetta', 'Jigglypuff', 'Ridley', 'Ganondorf'],
                isWeak : ['Samus', 'Joker', 'Falco', 'Bowser']
            },
            
            42 : {
                Name : 'Pit',
                Tier : 'Low',
                isStrong : ['LittleMac', 'Ryu', 'Ganondorf', 'CaptainFalcon'],
                isWeak : ['Pikachu', 'Lucina', 'Pichu', 'Snake']
            },
            
            63 : {
                Name : 'Richter',
                Tier : 'Low+',
                isStrong : ['Olimar', 'Ganondorf', 'Bowser', 'DonkeyKong'],
                isWeak : ['Pichu', 'Pikachu', 'Palutena', 'Joker']
            },
            
            71 : {
                Name : 'Ridley',
                Tier : 'Low+',
                isStrong : ['Ganondorf', 'LittleMac', 'Incineroar', 'KingDedede'],
                isWeak : ['Pikachu', 'Pichu', 'Ness', 'Palutena']
            },
            
            43 : {
                Name : 'Rob',
                Tier : 'High',
                isStrong : ['Incineroar', 'LittleMac', 'DonkeyKong', 'Ridley'],
                isWeak : ['Pikachu', 'Pichu', 'Cloud', 'Palutena']
            },
            
            44 : {
                Name : 'Robin',
                Tier : 'Low',
                isStrong : ['Ganondorf', 'Bowser', 'Charizard', 'Incineroar'],
                isWeak : ['Pichu', 'Pikachu', 'Wolf', 'Squirtle']
            },
            
            45 : {
                Name : 'RosalinaLuma',
                Tier : 'Mid',
                isStrong : ['Lucas', 'Ness', 'PAC-MAN', 'LittleMac'],
                isWeak : ['Chrom', 'Palutena', 'Pikachu', 'Lucina']
            },
            
            46 : {
                Name : 'Roy',
                Tier : 'High',
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'Charizard'],
                isWeak : ['Snake', 'Pikachu', 'Rob', 'YoungLink']
            },
            
            47 : {
                Name : 'Ryu',
                Tier : 'Mid+',
                isStrong : ['DonkeyKong', 'Villager', 'PiranhaPlant', 'LittleMac'],
                isWeak : ['Ness', 'Richter', 'Snake', 'Simon']
            },
            
            48 : {
                Name : 'Samus',
                Tier : 'Mid+',
                isStrong : ['Ganondorf', 'Bowser', 'Ridley', 'KingKRool'],
                isWeak : ['Wolf', 'Fox', 'Palutena', 'Falco']
            },
            
            50 : {
                Name : 'Shulk',
                Tier : 'High',
                isStrong : ['LittleMac', 'Jigglypuff', 'CaptainFalcon', 'Ridley'],
                isWeak : ['Snake', 'Pikachu', 'Rob', 'Palutena']
            },
            
            66 : {
                Name : 'Simon',
                Tier : 'Low+',
                isStrong : ['Ganondorf', 'Bowser', 'Charizard', 'Ridley'],
                isWeak : ['Pikachu', 'Pichu', 'Joker', 'ZeroSuitSamus']
            },
            
            65 : {
                Name : 'Snake',
                Tier : 'High',
                isStrong : ['Kirby', 'Ganondorf', 'LittleMac', 'DonkeyKong'],
                isWeak : ['Ness', 'Lucas', 'YoungLink', 'MrGameWatch']
            },
            
            51 : {
                Name : 'Sonic',
                Tier : 'Mid+',
                isStrong : ['Ridley', 'BowserJr', 'Zelda', 'Incineroar'],
                isWeak : ['Pikachu', 'Wolf', 'Lucina', 'MegaMan']
            },
            
            67 : {
                Name : 'Squirtle',
                Tier : 'Top',
                isStrong : ['Chrom', 'Incineroar', 'LittleMac', 'Richter'],
                isWeak : ['Pikachu', 'Pichu', 'Ness', 'Shulk']
            }, 
            
            78 : {
                Name : 'Terry',
                Tier : 'Mid+',
                Attr : {
                    FullHop : '27',
                    Gravity : '0.09',
                    RunSpeed : '1.72',
                    FallSpeed : '1.48',
                    Weight : '108',
                },
                isStrong : ['DonkeyKong', 'Incineroar', 'Ganondorf', 'CaptainFalcon'],
                isWeak : ['Joker', 'Lucina', 'Pikachu', 'Pichu']
            },
            
            52 : {
                Name : 'ToonLink',
                Tier : 'Mid',
                Attr : {
                    FullHop : '33.8',
                    Gravity : '0.081',
                    RunSpeed : '1.906',
                    FallSpeed : '1.38',
                    Weight : '91',
                },
                isStrong : ['KingKRool', 'Charizard', 'DonkeyKong', 'Bowser'],
                isWeak : ['Pikachu', 'Cloud', 'Wolf', 'Fox']
            },
            
            53 : {
                Name : 'Villager',
                Tier : 'Low+',
                isStrong : ['KingKRool', 'Ganondorf', 'DonkeyKong', 'Simon'],
                isWeak : ['Palutena', 'Pikachu', 'Fox', 'Pichu']
            },
            
            54 : {
                Name : 'Wario',
                Tier : 'High',
                isStrong : ['DonkeyKong', 'Ganondorf', 'KingKRool', 'Bayonetta'],
                isWeak : ['Lucina', 'Pikachu', 'Cloud', 'Marth']
            },
            
            55 : {
                Name : 'WiiFitTrainer',
                Tier : 'Mid',
                Attr : {
                    FullHop : '35.6',
                    Gravity : '0.09',
                    RunSpeed : '1.866',
                    FallSpeed : '1.3',
                    Weight : '96',
                },
                isStrong : ['Ganondorf', 'DonkeyKong', 'Ridley', 'Charizard'],
                isWeak : ['Pichu', 'Squirtle', 'Pikachu', 'MegaMan']
            },
            
            68 : {
                Name : 'Wolf',
                Tier : 'High',
                Attr : {
                    FullHop : '32.02',
                    Gravity : '0.13',
                    RunSpeed : '1.54',
                    FallSpeed : '1.8',
                    Weight : '92',
                },
                isStrong : ['Ganondorf', 'KingDedede', 'LittleMac', 'CaptainFalcon'],
                isWeak : ['Pikachu', 'Pichu', 'Lucina', 'Squirtle']
            },
            
            79 : {
                Name : 'YoungLink',
                Tier : 'Mid+',
                Attr : {
                    FullHop : '33.66',
                    Gravity : '0.096',
                    RunSpeed : '1.749',
                    FallSpeed : '1.8',
                    Weight : '88',
                },
                isStrong : ['Ridley', 'Ganondorf', 'DonkeyKong', 'Bowser'],
                isWeak : ['Wolf', 'Palutena', 'Fox', 'Cloud']
            },
            
            57 : {
                Name : 'Zelda',
                Tier : 'Low+',
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker']
            },
            
            76 : {
                Name : 'BanjoKazooie',
                Tier : 'Mid',
                Attr : {
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            
            56 : {
                Name : 'Yoshi',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '2.046',
                    Weight : '104',
                    Gravity : '0.08',
                    FallSpeed : '1.29',
                    FullHop : '36.09',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            
            77 : {
                Name : 'IceClimbers',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '1.53',
                    Weight : '92',
                    Gravity : '0.082',
                    FallSpeed : '1.3',
                    FullHop : '34.69',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            
            31 : {
                Name : 'Mewtwo',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '2.255',
                    Weight : '79',
                    Gravity : '0.082',
                    FallSpeed : '1.55',
                    FullHop : '31.11',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            
            
            49 : {
                Name : 'Sheik',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '2.42',
                    Weight : '78',
                    Gravity : '0.15',
                    FallSpeed : '1.75',
                    FullHop : '39',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            
            58 : {
                Name : 'ZeroSuitSamus',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '2.31',
                    Weight : '80',
                    Gravity : '0.11',
                    FallSpeed : '1.7',
                    FullHop : '44.5',
                },
                isStrong : ['KingKRool', 'Incineroar', 'DonkeyKong', 'KingDedede'],
                isWeak : ['Pichu', 'Pikachu', 'Squirtle', 'Inkling']
            },
            
            80 : {
                OwnerId : 80,
                Name : 'DarkSamus',
                DisplayName : 'Dark Samus',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '1.654',
                    Weight : '108',
                    Gravity : '0.11',
                    FallSpeed : '0.075',
                    FullHop : '37',
                },
                isStrong : ['Ganondorf', 'Bowser', 'Incineroar', 'Luigi'],
                isWeak : ['Wolf', 'Fox', 'Falco', 'Lucina']
            },
            
            81 : {
                OwnerId : 81,
                Name : 'Isabelle',
                DisplayName : 'Isabelle',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '1.48',
                    Weight : '88',
                    Gravity : '0.11',
                    FallSpeed : '0.07',
                    FullHop : '32.5',
                },
                isStrong : ['Ganondorf', 'KingKRool', 'DonkeyKong', 'Incineroar'],
                isWeak : ['Pikachu', 'Pichu', 'Palutena', 'YoungLink']
            },
            
            73 : {
                Name : 'KingKRool',
                Tier : 'Mid',
                Attr : {
                    RunSpeed : '1.485',
                    Gravity : '0.105',
                    Weight : '133',
                    FallSpeed : '1.7',
                    FullHop : '33',
                },
                isStrong : ['LittleMac', 'Charizard', 'DonkeyKong', 'Incineroar'],
                isWeak : ['Isabelle', 'Snake', 'Ness', 'Wolf']
            },
            82 : {
                OwnerId : 82,
                Name : 'MinMin',
                DisplayName : 'Min Min',
                Tier : 'Mid',
                Attr : {
                    FallSpeed : '1.5',
                    FullHop : '29.8',
                    Weight : '104',
                    RunSpeed : '1.566',
                },
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'KingKRool'],
                isWeak : ['Pikachu', 'Pichu', 'Roy', 'Lucina']
            },
            83 : {
                OwnerId : 83,
                Name : 'Byleth',
                DisplayName : 'Blyeth',
                Tier : 'Mid',
                Attr : {
                    FallSpeed : '1.6',
                    Gravity : '0.089',
                    FullHop : '26.5',
                    Weight : '97',
                    RunSpeed : '1.43',
                },
                isStrong : ['DonkeyKong', 'Ganondorf', 'Bowser', 'Ridley'],
                isWeak : ['Pikachu', 'Joker', 'YoungLink', 'Wolf']
            }
        },
    }
});
