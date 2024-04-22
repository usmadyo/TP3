**RSQA - Indice de la qualité de l’air (IQA)**

En premier lieu, nous avons ajouté nos couches avec des boutons en développant les codes Javascript correspondantes à chaque couche (incluant le 'paint').

 ![](https://lh7-us.googleusercontent.com/CElmee1qCEejsVrNYRibuB52NcahDx3MKglLVAVVApc7A7g4r7cYQjUY-EoUUZ45Xr55vihW8SDpbOWylx_gzIzCw65bej8-mc4nqqrh5f_dmu_NXRxwMRqRfsLsyBcrX5CTX83oi69QFMLjUB4qceg)

![](https://lh7-us.googleusercontent.com/_JuqGykatsWD18-0i-BTg0D4I1oAvHZpi5wtaSTMM78ydSZPiXPiZCpSx1SH9M5hANrDZIkbykyGVWgTUZhR98zwAkkmPD0ZFCMdQjGIOX31kW0GVpXX-fs7QsHj7qG_4lyqtR-jFvwwUuaK-pTxCh4)

 En cliquant sur ‘Load RSQA stations’, le code load les stations RSQA sur la carte avec un popup qui montre le numéro de la station.

![](https://lh7-us.googleusercontent.com/iReq825MNuedezHh6KwP5MP0xwDbhB9AiNQbKyKl-CSs0j3ROSCullaqZye9FU3-ld8w2bnTioAIXKZtAHSl4GlPiZXdj1tGqkRzM7B-LUs_kdynALDALzWEFBPdAIpdwpBaH5y9tw3_l4vO1mMnKVg)

En bas gauche de la carte, un feature count a été ajouté. Ce compteur illustre le nombre total des enregistrements de toutes les stations RSQA.

![](https://lh7-us.googleusercontent.com/xPMLYHz7vdz8PgcmWHvVuelKw5LxxKaY9WzAOyzjITfL6GtcMSIKTUgADQiaPaV9NY2bV3ZAG4P0Au97a4KkqZ8BD0B6lltd-_6gEnzA_pF7geOVFLsmoxQ9nLxdTNVnuX84liLZqk-Juu8_zVdZmAA)

Nous avons également ajouté des fonctions pour les contrôles de la carte. Ex. un contrôle de Navigation, un contrôle de Géolocalisation et un contrôle d’échelle.

Le bouton ‘Reset map’ a un but de supprimer toutes les couches de la carte.

Le bouton ‘Load arrondissements’ charge une couche WFS des arrondissements de la ville avec un popup qui montr le nom de l’arrondissement choisi.

![](https://lh7-us.googleusercontent.com/X336yBo8zwK9u4MAloLlkqF8S_LL0SwcfH4PAx9H_gMDSvVU8-frm7KBYACObNw0XIcRa2VAl3jF-v6KSLbba9fVdIa5X7Q4IMMiHJSHoVxAA4Y7jUIrSJ36jZ6NJG3ntFgT8OKjEpY7TugnqtAd3Gs)

De son côté, le bouton ‘Load WMS’ permet de charger un raster d’une image satellitaire qui couvre l’agglomération de Montréal.

![](https://lh7-us.googleusercontent.com/YTna5G_7sgR2bzTmiog7u1tPeaYLINWh5j7qhurHyAub4t2AjC64EzKVr3VXiIhaACHvI_HoZvPB_t0B58OgAqEScbBpEb81glDwtp3TRbbmNqm2gWw-1ZN1gFvulr-jbmPAplLJNpoMqNm-rnV8NRg) 

 À droite de la carte nous avons ajouté des informations explicatives et des liens pour consultation.

 ![](https://lh7-us.googleusercontent.com/HwWuj0g9WwKAWxZjTxxc-qScLVN1uJ4_QCU6cuTyZGI66I3KBFaCl_4Npb5kl3Yv7A2S2934Hg_vmWYT1t2TjGELRXKqJzzNLuo6BJ4bgeP5i-_JPMP1XR0fF9DqrNyPVPCX07NGCeNha4quBCokb7g)

Une légende interactive a également été ajoutée.

\---------------------------------------------------------------------------------------------------------------------------------------------------

En deuxième lieu, en utilisant la librairie turf.js, nous avons ajouté trois fonctions qui permettent de :

1\) Calculer la distance moyenne entre les stations RSQA

2\) Créer un buffer selon nos préférences aux alentours des stations RSQA.

3\) Générer une couche extrudée (3D)

 ![](https://lh7-us.googleusercontent.com/wtuhsSed542LfdxkmABcPzFCkgNDFglUWke3k_S_fdapD2iOcebEIicjg_FGx-gPZGzWqS1UtktjSIfM61Hle3Yo4lZKfjA9cYqqxgXISclFrQ9-5Pbfz7tT4010GRVnSg7uQeDPnrwReyHvbY2m5IE)

Voici notre application (service web final) 

 **__**

****![](https://lh7-us.googleusercontent.com/7-kBo7RepTIvG1fQ9dPp0UnR2djdo9zrNd2eH3q9jWW-H7rVEfzl6zxx9Q__44lsg_JnwALhpd0FzLJJUX_1IqQtVpzG_Au7e_q0CJDUtx3CDkkoGcuJmA0_ZVLAb2mZcSiohVTZ7LZkooeJjQM3F84)****
