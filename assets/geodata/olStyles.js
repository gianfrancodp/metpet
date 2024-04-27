

// A. GENERAL GEOLOGY STYLE
var General_Geology_olStyle;

// A. 1. CREATE PATTERNS
// A.1.1. Debris flow
var cnv1 = document.createElement('canvas');
var ctx1 = cnv1.getContext('2d');
var pattern1;
var patternimage1base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADTUlEQVR4nO1bW5LjMAh0pnKJ3C17utwtewzvx25cssyjoUGzH9NVrknGEo0xAgkp205ie77Fz157pG01//Z8Xy+kA6JA5OE9hRHejA4S/9em4Pbr97a/Htptqu3nsrC/Hm6baNux3aGzZ6kqV42gm3+UKXpAxPoa2P4fGahnRTDKvFuNsg/xUZx5AKmvpA9toE73kr6vkB3hVIMgAzTQjW0RiEFMkOd574lztBqayuYri+ycAH3zUruZ8xQD0HE73mfjRAZWP+/NX/pK1qqc/KyQw3BeDIAqUzmVXT3XGDlv+77vo+t05N1O2TQyVotae/ybBcNv9YPSYDZgVc3krJQXDnoTXAMgQjRFqqbUFr/GgRrfNUBmpZXpz/BLbWDeirGUXb1F22oTHUuOp/dWkYIyga4iODIp9JQGx/GSWXFF09w8Pln+KEa+u0eIjv+MEoi8irqCyW+5R+XwyPRZwa8Gwe+KDSg/siqFgmRYMxCdhRFEPsp/z87TkWCFFkQy/OPS3Zop+oIM63zuWe7lWdgCm8ezvCfZiAJam6oxnuVncKoHoBZGPGG+xz4cs0eA8H+heVYbZ0j5TOOIrBOyK0uP380CFdPN+XNURid/WxocSVeUvLKLpfS+QKTu310Kszg8fnFrDM3NXhk9q1QEEX7xhUmu5LnNfL96GRwd9xmdDx6tQcfeADp5yspG2s+yUztDiPtZfVBE9EH1uMhkrNmFldnj2Bj5n6AF4Y5qkXpAQlMKIWejvFcGt3SKk4HoDGARePLRQHhaDM3/rCJHUp1V0fH0iOontQnvDlc9VHXFCJEnpfnU+YAqVA4X1Pi0B1SjckYY4UzFgJVY9UKONNix+3PJOI0zTE8PTV7r+YD99TiuaL9lJ01RV8y4I+vGXjCrqCVCEyHtQSJzh2pkcr4EaAgwhc3smT4UjG5/7xFv6LuHR0X/+7w+zp4PiAS6sT3DX3F4iz4fwCihAeFn0+TP+YB/UAsi3ptFd4ezP5xYxl9l2eh3FlX8t+353iXrRd4S8/MW5hxxBX/6fIBnWQToZKaTnzofwACeqjbzw3uDmQWKtX8YldfFT58P8PBzPkD4HJXRyU+fD4jU3zoh6VG2GmTcDE1RDJjzAX8AhwGHoFNRbKoAAAAASUVORK5CYII='
var patternimage1 = new Image();
patternimage1.src = 'data:image/png;base64,' + patternimage1base64string;
patternimage1.onload = function() {pattern1 = ctx1.createPattern(patternimage1, 'repeat');};

// A.1.2 Landslides
var cnv2 = document.createElement('canvas');
var ctx2 = cnv2.getContext('2d');
var pattern2;
var patternimage2base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAABACAYAAAC5vjEqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA6klEQVR4nO3WwarCQBQE0Tv+/z+PiwciihaP2Qg5vUxlsgjpSq+9957nrDXzcunKfD1e0FrvNz8/6KJ87Zn9nwNX438v6Ic+6V/jt88nZWZUrDhJB19+8985B0VULDhJB7eD7KCzqFhwkg5uBwXnoIiKBSfp4HaQHXQWFQtO0sHtoOAcFFGx4CQd3A6yg86iYsFJOrgdFJyDIioWnKSD20F20FlULDhJB7eDgnNQRMWCk3RwO8gOOouKBSfp4HZQcA6KqFhwkg5uB9lBZ1Gx4CQd3A4KzkERFQtO0sHtIDvoLCoWnKSD20HB7/omBeiKlsR7AAAAAElFTkSuQmCC';
var patternimage2 = new Image();
patternimage2.src = 'data:image/png;base64,' + patternimage2base64string;
patternimage2.onload = function() {pattern2 = ctx2.createPattern(patternimage2, 'repeat');};
 
// A.1.3 Beaches and alluvial deposits
var cnv3 = document.createElement('canvas');
var ctx3 = cnv3.getContext('2d');
var pattern3;
var patternimage3base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEIAAAA9CAYAAAAZIL/8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACzUlEQVRogd1bW3ZCMQiMXUc3143Zxek+0o/Wc/SawAwMyT3lzzwICa8BtfXe++3aepRGe5/HGN4ZObI83nbNGEUv5/FC1llnZx/6MTblor6sxU9hCVneLfqileavdlVkXbMmI0KhlhAROKMIb82l997bRrp/X9rn11YRWmutfbT2K8wzHT8jcwiP0djxEZ7XWHIg8nn7X+ZZ8/TGVwW+SIyy1pW7hmf6Z3GNNnutbJCL7GUDIyIzCvig9Bk1vUo3UVNK0gx+8HycjT+eEjxZpziiwjWipLa0oWuwQjDrVjxa1hIeBENsVTAdFVKjvcoiD+E5PKFCkxWXURINqM6UCdAAjFgp3I9Ahcnw2xmgp4BqNJbx/xkf9vIs7kGthOpHZKi6x5C9BxQslalR2alSKpHmlEV8ijmPRi7guQgVI1ghsrxmeyvAWxhQRQ9ntLWS0unTImVNMOPnWSD62JIYYY2j89G12b1wP4INaIrmC8pzSdZQHLK6ZrEUcwrXUFe4LB+EXnYo4C7raqrLZvmUQuyz4pARncY11Bdl+ZmrlRqdzSMPy/YWkLm36hM9gD00Oq/GGyi/LXh2BYxmM5UJsSOQdrTGa9isxixTHLGr0EFIgURlWWN1pqhq0FgP9K9iRAZkDbOGsquE8GWtR1npPsjdsSt+KNOoZym36+B7DZZQLaMZaHuHKtpHWEHqDDFaN9xVgTKtdRXdK/aBylWreFRFr8PbT+OIDIKc8VRT5OHKkaUiLVvroiXBkcxag6HKJkyFoqBgmT38rLWLJZc0RiCHq7NGtl55CZary+AVfFieshjB8sjUF1ErsOaX/U3hNL+5/qM3eWavhWiDTWURTWX2h8rwFaQEWuq239sXPGrtZLKEutALd6gi7pERLENZCylxDdYKKtAsyxPuR6gIER4NyCx/i9x+RCRjoELtdI3j+Pa/O2ZIhU3u35f2AyMDa+DnfnNzAAAAAElFTkSuQmCC';
var patternimage3 = new Image();
patternimage3.src = 'data:image/png;base64,' + patternimage3base64string;
patternimage3.onload = function() {pattern3 = ctx3.createPattern(patternimage3, 'repeat');};

// A.1.4 Marine Terraces


var cnv4 = document.createElement('canvas');
var ctx4 = cnv4.getContext('2d');
var pattern4;
var patternimage4 = new Image();
patternimage4base64string ='iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAPUlEQVQI12O8fPkyAwODkJAQAwPD3SffGBgYrtx5y8DAwMSAA7Bgqo3y1sCrA1Ptly9f8OrAVPvu3Tt8OgDVfCB9xNNvNwAAAABJRU5ErkJggg==';
patternimage4.src = 'data:image/png;base64,' + patternimage4base64string;
patternimage4.onload = function() {pattern4 = ctx4.createPattern(patternimage4, 'repeat');};


// A.1.5 Marly clays, Pliocene inf
var cnv5 = document.createElement('canvas');
var ctx5 = cnv5.getContext('2d');
var pattern5;
var patternimage5base64string = 'iVBORw0KGgoAAAANSUhEUgAAAFwAAABQCAYAAACULRIjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABo0lEQVR4nO2Z0WnDUBAEpaAm0ptTXXpzytj8GwQ60K5WYubbHMcz3GDPurzeWiCHTCyvt2v0rWdvV3zJ68/foc/p99u8yYwz9r7kwdse8ihn7P11wh4wYEWaYaZH3yUTF22ztz0RtNzZpwl2a1v0k/b99tjbG2mGQZppDC6R1Cerltm7P3yeJqtPrtp798HbHvIo7XsjzTBIM8306Ltk4qJt9mn/FrbLao/03qc9eNtDHiW9N9IMgzTTGFwiqU9WLbNpmgNommFomjcEaaaZHn2XTFy0zaZpmqBphqFploA00xhcIqlPVi2zaZphaJphkGYYpJlmevRdMnHRNpumSdPMQtN8OEgzjcElkvpk1TKbpjmAphmGpnlDkGaa6dF3ycRF22yapgmaZhiaZglIM43BJZL6ZNUym6YZhqYZBmmGQZpppkffJRMXbbNpmjTNLDTNh4M00xhcIqlPVi2zaZoDaJphaJo3BGmmmR59l0xctM2maZqgaYahaZaANNMYXCKpT1Yts2maYWiaYZBmGKSZZnr0XTJx0TabpknTzELTfDj/s59DuhmnVswAAAAASUVORK5CYII=';
var patternimage5 = new Image();
patternimage5.src = 'data:image/png;base64,' + patternimage5base64string;
patternimage5.onload = function() {pattern5 = ctx5.createPattern(patternimage5, 'repeat');};

// A.1.6 Trubi
// fill with rgb (0,112,255)
var cnv6 = document.createElement('canvas');
var ctx6 = cnv6.getContext('2d');
ctx6.fillStyle = 'rgb(0,112,255)';
var pattern6 = ctx6.fillStyle;

// A.1.7 Evaporitic brecciated limestones
var cnv7 = document.createElement('canvas');
var ctx7 = cnv7.getContext('2d');
var pattern7;
var patternimage7base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEMAAABQCAYAAABCiMhGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABO0lEQVR4nO3aMY4CMRQE0R7E/a9sQheSg8GDB/lTldPB38V6AUdLWixJ8kyStAX3OI41uwu3Hx6i7z5WjO54iLT25WNsfIgkOXxAe8+Prn3DX+eX2+e/JsUPkZw9xh8cIjlzjD85ROID+pYCRQoUuwoUuwpUgY5ToEiBIgWKFCg/5gPa20+gC/+j9hLo4q/WPgK94Y3ZQ6A3PbY+oKi2QJega2J4x92aAp3crSfQC7s+oEiBIgWKbQWKbQWqQMfVFuiH23UFOrFdU6CT2/UEemHbBxQpUKRAsa1Asa1AFeg4BYoUKFKgSIHyYz6gPQWKFCi2FSi2FagCHadAkQJFChQpUH7MB7SnQJECxbYCxbYCVaDjagvU34HO79YUqL8Dvb7rA4oUKFKg2Fag2FagCnScAkUKFClQpEDRC8zKsIB1BecPAAAAAElFTkSuQmCC';
var patternimage7 = new Image();
patternimage7.src = 'data:image/png;base64,' + patternimage7base64string;
patternimage7.onload = function() {pattern7 = ctx7.createPattern(patternimage7, 'repeat');};

// A.1.8 Porites limestones, Messinian
var cnv8 = document.createElement('canvas');
var ctx8 = cnv8.getContext('2d');
var pattern8;
var patternimage8base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEwAAAA8CAYAAADMtVzqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC1klEQVR4nN1bW3LEIAxzdvYSe/+7dY9Bv5IhlJcfEqT6a6exjWIcI9wjpZREie9x3H7+KExYns2f0fhCxHRoCWOTxcIZ2yimNyMYkb3JEpmPx0yYdcG7EaWFirAySzR4OlEnpghjbafZOrLS/pAwT1bNQuND+8Ws2a79LqSGeQzPApW9qBfdJGy3zPKg9RIs/qdqGKNZtPip1SRNxlrW1SSMRVKEL1amioi8WI6iFqUhF/HSjx+Ryyr6c14CkVnoNYQejTRZFLEwdDNcW89FmLXgavGUjr+1vjdrAU8hSqRfQkxbcpRdTyKnxKjeqgljFVq0aNjzVyL371YrmP0aArNEnaAIiJpsiSQLIUepCPukpJJItAFHkOW1ES5Rz27BqO3r8RftQ4So6feC8pKLOknU8IcwjyrJDHwElM/b4Ttf8Ir6c0K72PzvPylBX1DIlvSQFaW4srIYqoc9ueNvIUQPqxGzA1nf4whvgq9RgRUFG+nTe7vUeuY1egvMY0ruE5Ed2hhq+FPDehcKjIB2tXvapkjUpdMWTv9WpSLii9trom+ErZB7y4AibaNuomhHoxp2vl7LhYYcKok6Yq5B87wF6J1iHkaxnjmRsxORZLXswy5ykQti3keW9mkTiMh6hZ4oyqFWXL0OtVhRB3t+1FPUPUQddWYIX3VWhbYVTxcha4AV/cgF7kKWSGVLMi9QV2w97/HptiX/05gmymdzS64e00Rr8z3fPVwZhn7zva1QUylQfr2AfiW1wbYOvNGw9JNXpx85J7/bGFTkEao5smklcDeyUDGo1IpVyoQFEVu7Vlu7EjVbFYjoARGZntu82orW3SJL52eNOln83A7fLE2/hch/oWnZiRQFQtUKC9gfGW9XsJwwKzyZ6SGNRphn7qxmp4S3mM8+Tycsh3fKMHoGY8am+2jEkINWXHq0YBYQta1AbYGoNsCDkT8TYdY3HpUVK9XcX480D1Q1mG3zAAAAAElFTkSuQmCC';
var patternimage8 = new Image();
patternimage8.src = 'data:image/png;base64,' + patternimage8base64string;
patternimage8.onload = function() {pattern8 = ctx8.createPattern(patternimage8, 'repeat');};

// A.1.9 Siliciclastic arenites, Tortoniano
var cnv9 = document.createElement('canvas');
var ctx9 = cnv9.getContext('2d');
var pattern9;
var patternimage9base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADVElEQVR4nN1bW3bjMAjFPlljFplNZj6mclWMxOUlpb1faYIlQIine7xf9KYgjifR+3X//KloPB5PojO6ECr88cTXk2iR51H6JjwR0SFZAHKKEg16+sizjcFqa3pIXyKb9lq0PBdZPwNc0aIC0AWyTmel3+D7mH0AcjV2w8KDqgCrQLutwsrvDwVIXjhToBHafb88s0N4HpFQfh79F5VeWFsHDaXSbx6FNfrhFYjE8whmglQ4ygeRTYOfmOVpIXMmnzkMViAjDHot52wE3AntjM2NByv4M1D6zVPhLMF/S1F0c4Ke8CNhp/CaP2h4v4LVYFtEY6Yqpx9hdKX6MrghPRPkz1ZZgmXdxkdfwzS5VAVkCCCFKdRMo9AO4ewJqyCtvTrhGeFSQJbn79GffKVQaPdH+l7sCFUj4hsiVWJfbzQsywSzGilRS7oVfZoFrOrNrYBkPVMLkMxmhyKsMd9CO+wHjB7eleJm1QscwyhQIai3wBnxkdE5NqXCo34+CnRmsBLTjhAvj0d0EryCeFLcCNQw6N0ks5cYdcDTPqMlEcr0C97Ob48Mhbhng38FJ1GeZn8jrp7gTlQ1TRCEO0I9suO8Zw+uTI0+VQFWQUbTqOgelsiRqoAZRn5GYtR7HTzOG1aA1sLSmJYYm6W4XoSmw7MFtIGlNy+P5vPSJFsbsPYIzwW0DRDMlGC1rL77i9CfmSGootNTHaLPiPk2eGZyElbnI7emaLRZSbQ/qeLQXqow9wNG0O4eskYG+JXWeIJbYshiCKoshFsgapGPXTk4AvRKSnRoD/NyglVNRxTW8Vl0n+b4pz4gs0jR6LLeS9DQ75PyfoC08AjSfL5yPwTLiiGib+GzlKAB8SGnlZEIfXbtz2k9e5kSIWuyw0975fAFXffHFdCE9zKLJkkZ4HuldIQis4FZlZepFG90cb8kZb2f/ecK0/eup47H+8UtOTan8xRL1fMJ+BWZ3pl9WrVngXQIkA/Q4vYn1xMNo9Yd/I6Qpc1kYchC79lLe+72LzOr4PEF1gyyf24EOA/YAR4xLN3eGW2vyCW1QGRkZo02/d/IvgfR/yhQlQVGEJ1aa/1Aoq+GiAbE7LL8B881Zg0bDdwKpBHAlQdEO8KWgWQVZidOJP/2D4drAkpDlWhmAAAAAElFTkSuQmCC';
var patternimage9 = new Image();
patternimage9.src = 'data:image/png;base64,' + patternimage9base64string;
patternimage9.onload = function() {pattern9 = ctx9.createPattern(patternimage9, 'repeat');};

// A.1.10 Mylonitic Skarn, Early Eocene
var cnv10 = document.createElement('canvas');
var ctx10 = cnv10.getContext('2d');
var pattern10;
var patternimage10base64string = 'iVBORw0KGgoAAAANSUhEUgAAAE4AAABUCAYAAAAs5wHgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABH0lEQVR4nO3VsQ3CMAAF0Zj5WIUqc1AxIB1rhAoRROVrEPCuS2SdosinP9brti2YZtyOy9SPO1+ex9fTeHn3eP4H13DjGodPf8C38pbq/prumb3uv+6SakSqEasaXVKNSDViVaNLqhGpRqxqdEk1ItWIVY0uqUakGrGq0SXViFQjVjW6pBqRasSqRpdUI1KNWNXokmpEqhGrGl1SjUg1YlWjS6oRqUasanRJNSLViFWNLqlGpBqxqtEl1YhUI1Y1uqQakWrEqkaXVCNSjVjV6JJqRKoRqxpdUo1INWJVo0uqEalGrGp0STUi1YhVjS6pRqQasarRJdWIVCNWNbqkGpFqxKpGl1QjUo1Y1eiSakSqEasaXVKNSDViVaNLqpE71JuV+mIv/AEAAAAASUVORK5CYII=';
var patternimage10 = new Image();
patternimage10.src = 'data:image/png;base64,' + patternimage10base64string;
patternimage10.onload = function() {pattern10 = ctx10.createPattern(patternimage10, 'repeat');};

// A.1.11 Mylonitic migmatitic paragneiss, Early Eocene
var cnv11 = document.createElement('canvas');
var ctx11 = cnv11.getContext('2d');
var pattern11;
var patternimage11base64string = 'iVBORw0KGgoAAAANSUhEUgAAAE0AAABUCAYAAADH0LrjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABHUlEQVR4nO3VsQ1CMRTF0B/mpGcESmpGYC52YI0wADQxCPSl4wGspyjWHfN+mRuWGNvxsfxo83x7L7uelg/4hevbvuGnrXP49wF75CXPvaVXXJ/65BmQZ8B6Bp88A/IMWM/gk2dAngHrGXzyDMgzYD2DT54BeQasZ/DJMyDPgPUMPnkG5BmwnsEnz4A8A9Yz+OQZkGfAegafPAPyDFjP4JNnQJ4B6xl88gzIM2A9g0+eAXkGrGfwyTMgz4D1DD55BuQZsJ7BJ8+APAPWM/jkGZBnwHoGnzwD8gxYz+CTZ0CeAesZfPIMyDNgPYNPngF5Bqxn8MkzIM+A9Qw+eQbkGbCewSfPgDwD1jP45BmQZ8B6Bp88A/IMWM/gk2fgCe0/4n1gL9IOAAAAAElFTkSuQmCC';
var patternimage11 = new Image();
patternimage11.src = 'data:image/png;base64,' + patternimage11base64string;
patternimage11.onload = function() {pattern11 = ctx11.createPattern(patternimage11, 'repeat');};

// A.1.12 Skarn
// fill with rgb(0,197,255)
var cnv12 = document.createElement('canvas');
var ctx12 = cnv12.getContext('2d');
ctx12.fillStyle = 'rgb(0,197,255)';
var pattern12 = ctx12.fillStyle;

// A.1.13 Layered tonalites, Upper Carboniferous
// fill with rgb(255,0,0)
var cnv13 = document.createElement('canvas');
var ctx13 = cnv13.getContext('2d');
var pattern13 = ctx13.fillStyle = 'rgb(255,0,0)';


// A.1.14 Augen gneiss, Upper Carboniferous (marine)
var cnv14 = document.createElement('canvas');
var ctx14 = cnv14.getContext('2d');
var pattern14;
var patternimage14base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACwUlEQVR4nN1b2Y7DIAx0qv43ypenT6CEAL4NdKSVVt0UH8D4yh5XShc44DjP8vuVkoeIrlyOvANzQDYk0oieHlQdWM/WDrjvHMDbcK6HtQp6yygOWGmnPfWoHYNeAc7CADrF78pFnBIAgI/FIlnZK6XXFYrEcZ5s+agDIg3KDpTsvnQTvhSlKM9gV4BqVDQHmXFABDAnSnioGwZb4S9jdqSwxMMBFBbG8gSS0GBnjk4OygE1pApzHWfppOG1oV6Bf8UrDOZQwsUo9MzMDUY4znOvKNCD5tSyOWAFWBZsqAM0Obl1Pk/daVYeAADlCngQH7tB4UjCrbU/d9KTFBMYRrl5/blnUdVbu0SB/EfJbmHoGWS1yxpnhUYBynWwKqqoa5Mc8M/JEakfsEKzwwsmHaERPIjVEsUBPSVndGkiURKhkXE73n1qNdkkQcshBJdArRMnNG1ulcO77LhFG/1BgpHGr8IJrGowqkvDWUObozxGY9FTmRXwAXgbPNP4HHI9iqHm597vB6x+ksw6QruO1Y8rpcu6wtoJTRIMVcDIgdJ1upOhlgDz4+cQebgDmEciNCpaJIXQDNw7W/dCrqfX9LmAZweIJH+2A2bjC2D3fk9rjdXH6gcAXFoiWnmsjtkUNhqLGqtz5ZZESLL4Y6FNE6LpJGide3C5aOiA3cpiCRcNOWBl46WbU3/HbS6gmtcRvtsyXtLCF3GARUijyIg4gY88QLSAY6IT4QRyNWgq1HDuoMWrGowAR452rIZ913U8HpEcaa8g6X+GJLVCdJtd6ohlX5Pjnh5pcaW+AlgqK1Eu8vSQToB0dL5KJjnaiDIZspjGcL4/elbzUkZLzugljW8WmB+WkglXWezZsCm1RTkcPVa35KKQKBAxVpdyEakaHN3XmrF7CuSfCLC4SHMFrEiqhrY4Y3FX7YDdukB3SHT/AcSxufdN4j+tAAAAAElFTkSuQmCC';
var patternimage14 = new Image();
patternimage14.src = 'data:image/png;base64,' + patternimage14base64string;
patternimage14.onload = function() {pattern14 = ctx14.createPattern(patternimage14, 'repeat');};

// A.1.15 Migmatitic paragneiss, Carboniferous
// fill with rgb(168,0,132)
var cnv15 = document.createElement('canvas');
var ctx15 = cnv15.getContext('2d');
var pattern15 = ctx15.fillStyle = 'rgb(168,0,132)';


// A.2. CREATE STYLE FUNCTION

//
var General_Geology_olStyle = function(feature) {
    var alpha = 0.5;
    var color;
    var pattern;
    switch(feature.get('Litotipo')) {
      case 'Debris flow' : color = pattern1; break;
      case 'Landslides' : color = pattern2; break;
      case 'Beaches and alluvial deposits' : color = pattern3; break;
      case 'Marine Terraces' : color = pattern4; break;
      case 'Marly clays' : color = pattern5; break;
      case 'Trubi' : color = pattern6; break;
      case 'Evaporitic brecciated limestones' : color = pattern7; break;
      case 'Porites limestones' : color = pattern8; break;
      case 'Siliciclastic arenites' : color = pattern9; break;
      case 'Mylonitic Skarn' : color = pattern10; break;      
      case 'Mylonitic migmatitic paragneiss' : color = pattern11; break;
      case 'Skarn' : color = pattern12; break;
      case 'Layered tonalites' : color = pattern13; break;
      case 'Augen gneiss' : color = pattern14; break;
      case 'Migmatitic paragneiss' : color = pattern15; break;
       
     

    } // get the color from the feature
    return new ol.style.Style({
        fill: new ol.style.Fill({
            color: color
        }),
        stroke: new ol.style.Stroke({
            color: color,
            width: 2
        }),
        text: new ol.style.Text({
          font: '12px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
          }),
          text: feature.get('Litotipo')
        })
    });
  };

  // B. CREATE STYLE FUNCTION FOR ACTIVE LANDSLIDES

var ActiveLandslidesLayerStyle = function(feature) {
  var alpha = 0.5;
  var color;
  switch(feature.get('TIPOLOGIA')) {
    case 'Crollo': color = `rgba(40, 95, 24, ${alpha}`; break;
    case 'Scorrimento': color  = `rgba(110, 151, 45, ${alpha})`; break;
    case 'ZDSL': color = `rgba(202, 217, 70, ${alpha})`; break;
    case 'ZEI' : color = `rgba(250, 219, 74, ${alpha})`; break;
    case 'ZFP' : color = `rgba(240, 139, 52, ${alpha})`; break;
    case 'ZFS' : color = `rgba(235, 63, 37, ${alpha})`; break;

  } // get the color from the feature
  return new ol.style.Style({
      fill: new ol.style.Fill({
          color: color
      }),
      stroke: new ol.style.Stroke({
          color: color,
          width: 2
      }),
      text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
          color: '#000'
        }),
        stroke: new ol.style.Stroke({
          color: '#fff',
          width: 3
        }),
        text: feature.get('TIPOLOGIA')
      })
    });
  };


  // C. HD STRUCTURAL FEATURES

 // C.1 Prepare Point style for each type of feature
 // C.1.1  "featureTyp": "JOINT" or "FAULT" 
 var HDSF_1 = new ol.style.Style({
    text: new ol.style.Text({
      font: '17px "ESRI_Geology", sans-serif',
      text: 'É',
      fill: new ol.style.Fill({
        color: 'rgba(229,182,54)'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      }),
      rotation: 0
    })
  });

  // C.1.2  "featureTyp": "FOLDAXIALPLANE"
  var HDSF_2 = new ol.style.Style({
    text: new ol.style.Text({
      font: '17px "ESRI_Geology", sans-serif',
      text: '»',
      fill: new ol.style.Fill({
        color: '#005ce6'   
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      }),
      rotation: 0
    })
  });
  // C.1.3 "featureTyp": "FOLDAXIS"
  var HDSF_3 = new ol.style.Style({
    text: new ol.style.Text({
      font: '17px "ESRI_Geology", sans-serif',
      text: 'Ö',
      fill: new ol.style.Fill({
        color: '#005ce6'   
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      }),
      rotation: 0
    })
  });

  // C.1.4 "featureTyp": "L1" and "STRETCHING"
  var HDSF_4 = new ol.style.Style({
    text: new ol.style.Text({
      font: '17px "ESRI_Geology", sans-serif',
      text: 'Ü',
      fill: new ol.style.Fill({
        color: '#e60000'   
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      }),
      rotation: 0
    })
  });

  // C.1.5 "featureTyp": "S0" and "SQUESTION"
  var HDSF_5 = new ol.style.Style({
    text: new ol.style.Text({
      font: '17px "ESRI_Geology", sans-serif',
      text: 'j',
      fill: new ol.style.Fill({
        color: '#ff0000'   
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      }),
      rotation: 0
    })
  });

  // C.2 Create style function for HD Structural Features

var HDStructuralFeaturesStyle = function(feature) {
  var style;
  var dipDirecti = feature.get('dipDirecti'); // get rotation font from geojson field "dipDirecti"
  switch(feature.get('featureTyp')) {
    case 'JOINT': 
      style = HDSF_1; 
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); //set rotation font from geojson data
      }
      break;
    case 'FAULT':
      style = HDSF_1; 
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'FOLDAXIALPLANE':
      style = HDSF_2;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'FOLDAXIS':
      style = HDSF_3;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'L1':
      style = HDSF_4;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'STRETCHING':
      style = HDSF_4;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'S0':
      style = HDSF_5;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
    case 'SQUESTION':
      style = HDSF_5;
      if (dipDirecti !== undefined) {
        style.getText().setRotation(dipDirecti * Math.PI / 180); 
      }
      break;
  }
  return style;
};

// D CONTOUR LINES Syles

var ContourLines10mLayerStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color : 'rgba(0, 0, 0,0.5)',
    width: 0.5
  })
});

// E Samples Styles

var SamplesStyle = function(feature) { 
  return new ol.style.Style({
  image: new ol.style.Circle({
      radius: 5,
      fill: new ol.style.Fill({
        color: 'rgba(255, 0, 0, 0.5)'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      })
    }),
  text: new ol.style.Text({
      font: '12px Calibri,sans-serif',
      fill: new ol.style.Fill({
        color: '#000'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 3
      }),
      text: feature.get('Nome')
    })
  });
};