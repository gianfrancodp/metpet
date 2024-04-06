<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:se="http://www.opengis.net/se" xmlns:ogc="http://www.opengis.net/ogc" version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <se:Name>General_Geology</se:Name>
    <UserStyle>
      <se:Name>General_Geology</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Debris flow, Recent</se:Name>
          <se:Description>
            <se:Title>Debris flow, Recent</se:Title>
            <se:Abstract>Debris flow, Recent</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Debris flow, Recent</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <!-- TODO Test with this implemented for points -->
          <!--  -->
          <!-- <Graphic>
 5           <ExternalGraphic>
 6             <OnlineResource
 7               xlink:type="simple"
 8               xlink:href="smileyface.png" />
 9             <Format>image/png</Format>
10           </ExternalGraphic>
11           <Size>32</Size>
12         </Graphic> -->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Landslides, Recent</se:Name>
          <se:Description>
            <se:Title>Landslides, Recent</se:Title>
            <se:Abstract>Landslides, Recent</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Landslides, Recent</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Beaches and alluvial deposits, Holocene</se:Name>
          <se:Description>
            <se:Title>Beaches and alluvial deposits, Holocene</se:Title>
            <se:Abstract>Beaches and alluvial deposits, Holocene</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Beaches and alluvial deposits, Holocene</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#e39e00</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Marine Terraces, Quaternary</se:Name>
          <se:Description>
            <se:Title>Marine Terraces, Quaternary</se:Title>
            <se:Abstract>Marine Terraces, Quaternary</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Marine Terraces, Quaternary</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:GraphicFill>
                <se:Graphic>
                  <se:Mark>
                    <se:WellKnownName>horline</se:WellKnownName>
                    <se:Stroke>
                      <se:SvgParameter name="stroke">#d2d2d2</se:SvgParameter>
                      <se:SvgParameter name="stroke-width">7</se:SvgParameter>
                    </se:Stroke>
                  </se:Mark>
                  <se:Size>6</se:Size>
                  <se:Rotation>
                    <ogc:Literal>45</ogc:Literal>
                  </se:Rotation>
                  <se:Displacement>
                    <se:DisplacementX>1</se:DisplacementX>
                    <se:DisplacementY>1</se:DisplacementY>
                  </se:Displacement>
                </se:Graphic>
              </se:GraphicFill>
            </se:Fill>
          </se:PolygonSymbolizer>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:GraphicFill>
                <se:Graphic>
                  <se:Mark>
                    <se:WellKnownName>horline</se:WellKnownName>
                    <se:Stroke>
                      <se:SvgParameter name="stroke">#6b7eae</se:SvgParameter>
                      <se:SvgParameter name="stroke-width">4</se:SvgParameter>
                    </se:Stroke>
                  </se:Mark>
                  <se:Size>6</se:Size>
                  <se:Rotation>
                    <ogc:Literal>45</ogc:Literal>
                  </se:Rotation>
                </se:Graphic>
              </se:GraphicFill>
            </se:Fill>
          </se:PolygonSymbolizer>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#6b7e93</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Marly clays, Pliocene inf</se:Name>
          <se:Description>
            <se:Title>Marly clays, Pliocene inf</se:Title>
            <se:Abstract>Marly clays, Pliocene inf</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Marly clays, Pliocene inf</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Trubi, Pliocene inf</se:Name>
          <se:Description>
            <se:Title>Trubi, Pliocene inf</se:Title>
            <se:Abstract>Trubi, Pliocene inf</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Trubi, Pliocene inf</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#0070ff</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Evaporitic brecciated limestones, Messinian</se:Name>
          <se:Description>
            <se:Title>Evaporitic brecciated limestones, Messinian</se:Title>
            <se:Abstract>Evaporitic brecciated limestones, Messinian</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Evaporitic brecciated limestones, Messinian</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Porites limestones, Messinian</se:Name>
          <se:Description>
            <se:Title>Porites limestones, Messinian</se:Title>
            <se:Abstract>Porites limestones, Messinian</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Porites limestones, Messinian</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#17a8e8</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Siliciclastic arenites, Tortoniano</se:Name>
          <se:Description>
            <se:Title>Siliciclastic arenites, Tortoniano</se:Title>
            <se:Abstract>Siliciclastic arenites, Tortoniano</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Siliciclastic arenites, Tortoniano</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Mylonitic Skarn, Early Eocene</se:Name>
          <se:Description>
            <se:Title>Mylonitic Skarn, Early Eocene</se:Title>
            <se:Abstract>Mylonitic Skarn, Early Eocene</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Mylonitic Skarn, Early Eocene</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Mylonitic migmatitic paragneiss, Early Eocene</se:Name>
          <se:Description>
            <se:Title>Mylonitic migmatitic paragneiss, Early Eocene</se:Title>
            <se:Abstract>Mylonitic migmatitic paragneiss, Early Eocene</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Mylonitic migmatitic paragneiss, Early Eocene</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Skarn, Upper Carboniferous</se:Name>
          <se:Description>
            <se:Title>Skarn, Upper Carboniferous</se:Title>
            <se:Abstract>Skarn, Upper Carboniferous</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Skarn, Upper Carboniferous</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#00c5ff</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Layered tonalites, Upper Carboniferous</se:Name>
          <se:Description>
            <se:Title>Layered tonalites, Upper Carboniferous</se:Title>
            <se:Abstract>Layered tonalites, Upper Carboniferous</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Layered tonalites, Upper Carboniferous</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#ff0000</se:SvgParameter>
            </se:Fill>
            <se:Stroke>
              <se:SvgParameter name="stroke">#6e6e6e</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
            </se:Stroke>
          </se:PolygonSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Augen gneiss, Carboniferous</se:Name>
          <se:Description>
            <se:Title>Augen gneiss, Carboniferous</se:Title>
            <se:Abstract>Augen gneiss, Carboniferous</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Augen gneiss, Carboniferous</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <!--SymbolLayerV2 RasterFill not implemented yet-->
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#000000</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">round</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">round</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Migmatitic paragneiss, Carboniferous</se:Name>
          <se:Description>
            <se:Title>Migmatitic paragneiss, Carboniferous</se:Title>
            <se:Abstract>Migmatitic paragneiss, Carboniferous</se:Abstract>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:Function name="concat">
                <ogc:PropertyName>Litotipo</ogc:PropertyName>
                <ogc:Literal>, </ogc:Literal>
                <ogc:PropertyName>Age</ogc:PropertyName>
              </ogc:Function>
              <ogc:Literal>Migmatitic paragneiss, Carboniferous</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#a80084</se:SvgParameter>
            </se:Fill>
            <se:Stroke>
              <se:SvgParameter name="stroke">#6e6e6e</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
            </se:Stroke>
          </se:PolygonSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>&lt;all other values></se:Name>
          <se:Description>
            <se:Title>&lt;all other values></se:Title>
            <se:Abstract>&lt;all other values></se:Abstract>
          </se:Description>
          <se:ElseFilter xmlns:se="http://www.opengis.net/se"/>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#d4fcfc</se:SvgParameter>
            </se:Fill>
            <se:Stroke>
              <se:SvgParameter name="stroke">#6e6e6e</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.5</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
            </se:Stroke>
          </se:PolygonSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
