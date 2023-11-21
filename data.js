try {
    const response = await fetch(
        "https://public.opendatasoft.com/explore/dataset/evenements-publics-openagenda/api/?disjunctive.keywords_fr&disjunctive.location_city&disjunctive.location_department&disjunctive.location_region&disjunctive.location_countrycode&refine.keywords_fr=concert&refine.location_countrycode=FR&refine.lastdate_begin=2023"
        );
  
    if (!response.ok) {
      throw new Error(`Erreur de réseau - ${response.status}`);
    }
  
    const data = await response.json();
    console.log("data", data);
    // Maintenant, vous pouvez accéder aux résultats
    console.log("results", data.records);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }