try {
    const concert = await fetch(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
        );
  
    if (!concert.ok) {
      throw new Error(`Erreur de réseau - ${concert.status}`);
    }
  
    const data = await concert.json();
    console.log("data", data);
    // Maintenant, vous pouvez accéder aux résultats
    console.log("results", data.records);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }




  