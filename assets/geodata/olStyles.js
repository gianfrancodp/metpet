  // TODO
  // For more layer styles poligon are filled with raster images patterns
  // data of patter are stored in .qml file at: <Option name="imageFile" type="QString" value="base64: ....."/>
  // Manually or in a same script way, there is a need  to extract these images and pass in style LayerStyle
  // For example:
  // var cnv = document.createElement('canvas');
  // var ctx = cnv.getContext('2d');
  // var img = new Image();
  // img.src = ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABUCAYAAAAs5wHgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABH0lEQVR4nO3VsQ3CMAAF0Zj5WIUqc1AxIB1rhAoRROVrEPCuS2SdosinP9brti2YZtyOy9SPO1+ex9fTeHn3eP4H13DjGodPf8C38pbq/prumb3uv+6SakSqEasaXVKNSDViVaNLqhGpRqxqdEk1ItWIVY0uqUakGrGq0SXViFQjVjW6pBqRasSqRpdUI1KNWNXokmpEqhGrGl1SjUg1YlWjS6oRqUasanRJNSLViFWNLqlGpBqxqtEl1YhUI1Y1uqQakWrEqkaXVCNSjVjV6JJqRKoRqxpdUo1INWJVo0uqEalGrGp0STUi1YhVjS6pRqQasarRJdWIVCNWNbqkGpFqxKpGl1QjUo1Y1eiSakSqEasaXVKNSDViVaNLqpE71JuV+mIv/AEAAAAASUVORK5CYII=';

  // img.onload = function(){
  //   var pattern = ctx.createPattern(img, 'repeat');
    
  //   featurePoly.setStyle(new ol.style.Style({
  //     fill: new ol.style.Fill({
  //       color: pattern
  //     })
  //   }));
  // };
  // this is a little test: https://jsfiddle.net/6bn1c9wz/


  // NOTE for 1 feature it works, but for a layer it doesn't work
  // I think it is because the image is loaded after the style is applied
  // I think I need to load the image before the style is applied
  // Try to use Promise.all() to load all images before applying the style


// GENERAL GEOLOGY STYLE
var General_Geology_olStyle;

// 1. CREATE PATTERNS
// 1.1. Debris flow, Recent
var cnv = document.createElement('canvas');
var ctx = cnv.getContext('2d');
var pattern1;
var patternimage1base64string = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADTUlEQVR4nO1bW5LjMAh0pnKJ3C17utwtewzvx25cssyjoUGzH9NVrknGEo0xAgkp205ie77Fz157pG01//Z8Xy+kA6JA5OE9hRHejA4S/9em4Pbr97a/Htptqu3nsrC/Hm6baNux3aGzZ6kqV42gm3+UKXpAxPoa2P4fGahnRTDKvFuNsg/xUZx5AKmvpA9toE73kr6vkB3hVIMgAzTQjW0RiEFMkOd574lztBqayuYri+ycAH3zUruZ8xQD0HE73mfjRAZWP+/NX/pK1qqc/KyQw3BeDIAqUzmVXT3XGDlv+77vo+t05N1O2TQyVotae/ybBcNv9YPSYDZgVc3krJQXDnoTXAMgQjRFqqbUFr/GgRrfNUBmpZXpz/BLbWDeirGUXb1F22oTHUuOp/dWkYIyga4iODIp9JQGx/GSWXFF09w8Pln+KEa+u0eIjv+MEoi8irqCyW+5R+XwyPRZwa8Gwe+KDSg/siqFgmRYMxCdhRFEPsp/z87TkWCFFkQy/OPS3Zop+oIM63zuWe7lWdgCm8ezvCfZiAJam6oxnuVncKoHoBZGPGG+xz4cs0eA8H+heVYbZ0j5TOOIrBOyK0uP380CFdPN+XNURid/WxocSVeUvLKLpfS+QKTu310Kszg8fnFrDM3NXhk9q1QEEX7xhUmu5LnNfL96GRwd9xmdDx6tQcfeADp5yspG2s+yUztDiPtZfVBE9EH1uMhkrNmFldnj2Bj5n6AF4Y5qkXpAQlMKIWejvFcGt3SKk4HoDGARePLRQHhaDM3/rCJHUp1V0fH0iOontQnvDlc9VHXFCJEnpfnU+YAqVA4X1Pi0B1SjckYY4UzFgJVY9UKONNix+3PJOI0zTE8PTV7r+YD99TiuaL9lJ01RV8y4I+vGXjCrqCVCEyHtQSJzh2pkcr4EaAgwhc3smT4UjG5/7xFv6LuHR0X/+7w+zp4PiAS6sT3DX3F4iz4fwCihAeFn0+TP+YB/UAsi3ptFd4ezP5xYxl9l2eh3FlX8t+353iXrRd4S8/MW5hxxBX/6fIBnWQToZKaTnzofwACeqjbzw3uDmQWKtX8YldfFT58P8PBzPkD4HJXRyU+fD4jU3zoh6VG2GmTcDE1RDJjzAX8AhwGHoFNRbKoAAAAASUVORK5CYII='
var patternimage1 = new Image();
patternimage1.src = 'data:image/png;base64,' + patternimage1base64string;
patternimage1.onload = function() {pattern1 = ctx.createPattern(patternimage1, 'repeat');};

  


var General_Geology_olStyle = function(feature) {
    var alpha = 0.5;
    var color;
    var pattern;
    switch(feature.get('Litotipo')) {
      case 'Marine Terraces': color = `rgba(144, 238, 144, ${alpha}`; break;
      case 'Beaches and alluvial deposits': color = `rgba(0, 128, 0, ${alpha}`; break;
      case 'Trubi': color = `rgba(34, 139, 34, ${alpha}`; break;
      case 'Mylonitic Skarn' : color = `rgba(85, 107, 47, ${alpha}`; break;
      case 'Skarn' : color = `rgba(0, 102, 51, ${alpha}`; break;
      case 'Evaporitic brecciated limestones' : color = `rgba(102, 205, 170, ${alpha}`; break;
      case 'Migmatitic paragneiss' : color = `rgba(127, 255, 212, ${alpha}`; break;
      case 'Debris flow' : color = pattern1; break;
      case 'Porites limestones' : color = `rgba(0, 102, 204, ${alpha}`; break;
      case 'Augen gneiss' : color = `rgba(135, 206, 250, ${alpha}`; break;
      case 'Siliciclastic arenites' : color = `rgba(15, 82, 186, ${alpha}`; break;
      case 'Layered tonalites' : color = `rgba(0, 0, 128, ${alpha}`; break;
      case 'Marly clays' : color = `rgba(10, 10, 20, ${alpha}`; break;
      case 'Landslides' : color = `rgba(0, 39, 77, ${alpha}`; break;
      case 'Mylonitic migmatitic paragneiss' : color = `rgba(65, 105, 225, ${alpha}`; break;

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

var ActiveLandslidesLayerStyle = function(feature) {
  var alpha = 0.5;
  var color;
  switch(feature.get('TIPOLOGIA')) {
    case 'Crollo': color = `rgba(26, 150, 65, ${alpha}`; break;
    case 'Scorrimento': color  = `rgba(119, 195, 92, ${alpha})`; break;
    case 'ZDSL': color = `rgba(196, 230, 135, ${alpha})`; break;
    case 'ZEI' : color = `rgba(255, 255, 192, ${alpha})`; break;
    case 'ZFP' : color = `rgba(255, 127, 0, ${alpha})`; break;
    case 'ZFS' : color = `rgba(255, 0, 0, ${alpha})`; break;

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
