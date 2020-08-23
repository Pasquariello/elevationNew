angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.listings = [

        {
            id: 1
            , pdf: 'pdf/BelmarMedicalBuildingBrochure.pdf'
            , imgURL: 'images/belmareBuilding.png'
            , name: 'The Belmar Medical Building'
            , alphabetical: 'Belmar Medical Building'
            , description: 'The Belmar Medical Building is a 31,853 square foot medical office building at 8015 West Alameda Avenue in Lakewood Colorado. Available Suites'
            , propertyDetails: ['Building Size: 31,853 Square Feet', 'Rental Rate: $17.00 NNN', 'Operating Expenses: $11.31', 'Competitive Tenant Improvement Packages']
            , highlights: ['Located in Lakewood minutes away from the Belmar shopping district'
, '1.8 miles from the new 224 bed St. Anthony Hospital'
, 'Adjacent to the brand new Village at Belmar senior living community'
 , 'Pharmacy conveniently located in the building']
            , location: '8015 West Alameda Avenue Lakewood Colorado'
            , size: '31,853 square feet'
            , suites: [
                {
                    name: 'Suite 130 - '
                    , size: '572 Square Feet'
                  },
                {
                    name: 'Suite 220 - '
                    , size: '2,370 Square Feet'
                  },
                {
                    name: 'Suite 240 - '
                    , size: '1,251 Square Feet'
                  }
                        , {
                    name: 'Suite 260 - '
                    , size: '2,797 Square feet (Available January 1, 2019)'
                  },

                  ]
        , },

        {
            id: 2
            , pdf: 'pdf/GreeleyProfessionalBuildingBrochure.pdf'
            , imgURL: 'images/greeleyProfessionalBuilding.png'
            , name: 'The Greeley Medical Building'
            , alphabetical: 'Greeley Medical Building'
            , description: ''
            , propertyDetails: ['Building Size: 18,000 Square Feet', 'Rental Rate: $12.00 NNN', 'Operating Expenses: $10.48', 'Competitive Tenant Improvement Packages']
            , highlights: [
                 'Located directly across 16th Street from the Banner Health Northern Colorado Medical Center'
, 'Adjacent to the 73,778 Square Foot UCHealth Medical Clinic'
, 'Anchor tenant is UCHealth Oncology and Hematology Rheumatology Infusion Center'
, ]
            , location: '1675 18th Avenue, Greeley Colorado'
            , size: '18,954 square feet'
            , suites: [
                {
                    name: 'From 1,000 Square Feet to 9,871 Square Feet'
                , }


                  ]
        , },

        {
            id: 3
            , pdf: 'pdf/GreeleyMedicalClinicBrochure.pdf'
            , imgURL: 'images/greeleyMedicalClinincBuilding.png'
            , name: 'The Greeley Medical Clinic'
            , alphabetical: 'Greeley Medical Clinic'
            , description: ''
            , propertyDetails: [
                           'Building Size: 73,778 Square Feet'
                           , 'Rental Rate: $15.75 NNN (August 2020 Rate)'
                           , 'Operating Expenses: $10.21 (2018)'
                           , 'Competitive Tenant Improvement Packages'
                       ]
            , highlights: [
                 'Unique opportunity to lease an entire 5 story medical office building'
                 , 'Located directly across 16th Street from the Banner Health Northern Colorado Medical Center'
                 , 'Adjacent to the UCHealth Poudre Valley Medical Group'
             , ]
            , location: '1900 16th Street, Greeley Colorad'
            , suites: [
                {
                    name: 'From 1,000 Square Feet to 73,778 Square Feet Available August 2020'
                    , size: ''
                  },


                  ]
        , },

        {
            id: 4
            , pdf: 'pdf/greeleyProfessionalArtsBuildingBrochure.pdf'
            , imgURL: 'images/greeleyProfessionalArtsBuildingBrochure.png'
            , name: 'The Greeley Professional Arts Building'
            , alphabetical: 'Greeley Professional Arts Building'
            , description: '2000 16th Street, Greeley Colorado'
            , location: ''
            , propertyDetails: [
                           'Building Size: 9,627 Square Feet'
                           , 'Rental Rate: Negotiable'
                           , 'Operating Expenses: $6.73'
                           , 'Competitive Tenant Improvement Packages'
                       ]
            , highlights: [
                 'Located directly across 16th Street from the Banner Health Northern Colorado Medical Center'
                 , 'Adjacent to the 73,778 Square Foot UCHealth Medical Clinic'
                 , 'Short walk from UCHealth Oncology and Hematology Rheumatology Infusion Center'
                 , 'EXCELLENT location for retail'
             ]
            , suites: [
                {
                    name: 'From 500 Square Feet to 9,627 Square Feet'
                    , size: ''
                  },



                  ]
        , }
                , {
            id: 5
            , pdf: 'pdf/HighlandsRanchMedicalPavilionBrochure.pdf'
            , imgURL: 'images/highlandsRanchMedicalPavilionBrochure.png'
            , name: 'Highlands Ranch Medical Pavilion'
            , alphabetical: 'Highlands Ranch Medical Pavilion'
            , description: ''
            , location: '8671 South Quebec Street Highlands Ranch Colorado'
            , propertyDetails: [
                           'Building Size: 36,872 Square Feet'
                           , 'Rental Rate: $19.95 NNN'
                           , 'Operating Expenses: $13.28'
                       ]
            , highlights: [
                 'Located at Quebec and C-470 in vibrant Highlands Ranch'
                 , 'Adjacent to King Soopers in the Gateway Center'
                 , 'Tenancy includes National Jewish Health and Arapahoe Park Pediatrics'
             ]
            , suites: [
                {
                    name: 'Suite 150 - '
                    , size: '2,205 Square Feet'
                  }
                        , {
                    name: 'Suite 200 - '
                    , size: '4,240 Square Feet'
                  }
                        , {
                    name: 'Suite 210 - '
                    , size: '5,866 Square Feet'
                  }
                        , {
                    name: 'Suite 220 - '
                    , size: '2,180 Square Feet'
                  }
                        , {
                    name: 'Suite 230 - '
                    , size: '2,555 Square Feet'
                  }
                        , {
                    name: 'Suite 240 - '
                    , size: '2,188 Square Feet'
                  },



                  ]
        , },

        {
            id: 6
            , pdf: 'pdf/StAnthonyNorthMOBBrochure.pdf'
            , imgURL: 'images/stAnthonyNorthMedicalOfficeBuildingBrochure.png'
            , name: 'St. Anthony North Medical Office Building'
            , alphabetical: 'St. Anthony North Medical Office Building'
            , description: ''
            , location: '8510 Bryant Street | Westminster Colorado'
            , propertyDetails: [
                           'Building Size: 60,372 Square Feet'
                           , 'Rental Rate: $20.00 NNN'
                           , 'Operating Expenses: $12.75'
                             , 'Competitive Tenant Improvement Packages'
                       ]
            , highlights: [
                 'Located on the Centura Health 84th Avenue Neighborhood Health Center campus featuring a 24/7 ER, Cardiac Rehabilitation, Family Medicine, Pulmonary Rehabilitation, Senior Health and a Wound Care Center'
                 , 'Anchored by 20,578 Square Feet Clinica Family Health Services'
             ]
            , suites: [
                {
                    name: 'Suite 170 - '
                    , size: '3,004 Square Feet'
                  }
                        , {
                    name: 'Suite 320 - '
                    , size: '6,677 Square Feet'
                  }
                        , {
                    name: 'Suite 330 - '
                    , size: '3,558 Square Feet'
                  }
                        , {
                    name: 'Suite 340 - '
                    , size: '1,261 Square Feet'
                  }
                        , {
                    name: 'Suite 350 - '
                    , size: '5,440 Square Feet'
                  }
                        , {
                    name: 'Suite 360 - '
                    , size: '4,025 Square Feet'
                  },



                  ]
        , },

        {
            id: 7
            , pdf: 'pdf/trinityMedicalPlazaBrochure.pdf'
            , imgURL: 'images/trinityMedicalPlazaBrochure.png'
            , name: 'Trinity Medical Plaza'
            , alphabetical: 'Trinity Medical Plaza'
            , description: ''
            , location: 'East 128th Avenue and Colorado Boulevard Thornton Colorado'
            , propertyDetails: [
                           'Building Size: 18,954 Square Feet'
, 'Rental Rate: $23.50 NNN'
 , 'Operating Expenses: $9.66'
, 'Competitive Tenant Improvement Packages'
, 'Parking Ratio: 5 to 1,000 Square Feet'
                       ]
            , highlights: [
                 'Located in Thornton adjacent to the new Centura Thornton Neighborhood Center'
                 , 'Monument signage available on busy Colorado Boulevard'
                 , 'Brand new suite configured to your specifications'
             , ]
            , suites: [
                {
                    name: 'From 1,000 Square Feet to 9,227 Square Feet'
                    , size: ''
                  },



                  ]
        , },

        {
            id: 8
            , pdf: 'pdf/RangeVistaProfessionalBuildingBrochure.pdf'
            , imgURL: 'images/rangeVistaProfessionalBuilding.png'
            , name: 'Range Vista Professional Building'
            , alphabetical: 'Range Vista Professional Building'
            , description: ''
            , propertyDetails: ['Building Size: 28,034 Square Feet', 'Rental Rate: $12.95 NNN', 'Operating Expenses: $9.86']
            , highlights: ['Located directly across 84th Avenue from the 84th Avenue Neighborhood Health Center featuring a 24/7 ER, Cardiac Rehabilitation, Family Medicine, Pulmonary Rehabilitation, Senior Health and a Wound Care Center.']
            , location: '8300 North Alcott Street Westminster Colorado'
            , suites: [
                {
                    name: 'Suite 100 - '
                    , size: '2,997 Square Feet'
                  }
                        , {
                    name: 'Suite 101 - '
                    , size: '2,998 Square feet'
                  }
                , {
                    name: 'Suite 102 - '
                    , size: '1,578 Square Feet'
                  }
                        , {
                    name: 'Suite 200 - '
                    , size: '1,471 Square feet'
                  }
                         , {
                    name: 'Suite 201 - '
                    , size: '2,993 Square feet'
                  },

                {
                    name: 'Suite 205 - '
                    , size: '5,058 Square Feet'
                  }
            

                  ]
        , },


        {
            id: 9
            , pdf: 'pdf/WildcatParkwayMedicalDentalBuildingBrochure.pdf'
            , imgURL: 'images/wildcatParkwayMedicalAndDentalBuilding.png'
            , name: 'Wildcat Parkway Medical and Dental Building'
            , alphabetical: 'Wildcat Parkway Medical and Dental Building'
            , description: ''
            , location: '4185 East Wildcat Reserve Parkway Highlands Ranch Colorado'
            , propertyDetails: [
                           'Building Size: 25,585 Square Feet',
                           'Operating Expenses: $9.60',
                          'Competitive Tenant Improvement Packages'
                       ]
            , highlights: [
                 'Located on Wildcat Reserve Parkway adjacent to Walgreens in vibrant Highlands Ranch'
                 , 'Across the street from King Soopers and Starbucks'
                 , 'Suite 210 is built out for a dental prationner with five operatories'
             , ]
            , suites: [
                {
                    name: 'Suite G80 - '
                    , size: '1,545 Square Feet - Rental Rate: $18.00 NNN'
                  }
                , {
                    name: 'Suite 210 - '
                    , size: '2,077 Square Feet - Rental Rate: $23.50 NNN'
                  },


                  ]
        , },


    ];
});