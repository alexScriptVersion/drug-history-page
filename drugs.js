// ============================================
// DRUG DATA
// ============================================

const drugClasses = {
  antidepressants: [
    {
      id: 1,
      name: "Iproniazid (Marsilid)",
      year: 1958,
      type: "Monoamine Oxidase Inhibitor",
      typeAbbreviation: "MAOI",
      classKey: "maoi",
      icon: "🔬",
      description: "First antidepressant discovered, initially developed as tuberculosis treatment",
      discoveredBy: "Researchers at Hoffmann-La Roche",
      impact: "Pioneered the biological treatment of depression",
      controversy: "Withdrawn in many countries due to hepatotoxicity concerns"
    },
    {
      id: 2,
      name: "Imipramine (Tofranil)",
      year: 1959,
      type: "Tricyclic Antidepressant",
      typeAbbreviation: "TCA",
      classKey: "tca",
      icon: "🔄",
      description: "First tricyclic antidepressant, discovered while researching antipsychotics",
      discoveredBy: "Roland Kuhn",
      impact: "Established the monoamine hypothesis of depression",
      controversy: "Significant side effects and dangerous in overdose"
    },
    {
      id: 3,
      name: "Bupropion (Wellbutrin)",
      year: 1985,
      type: "Norepinephrine-Dopamine Reuptake Inhibitor",
      typeAbbreviation: "NDRI",
      classKey: "ndri",
      icon: "⚙️",
      description: "Atypical antidepressant affecting dopamine and norepinephrine, not serotonin",
      discoveredBy: "Nariman Mehta at Burroughs Wellcome",
      impact: "Widely used for depression and smoking cessation with fewer sexual side effects",
      controversy: "Initially withdrawn due to seizure risk, later reintroduced with dosing adjustments"
    },
    {
      id: 4,
      name: "Fluoxetine (Prozac)",
      year: 1987,
      type: "Selective Serotonin Reuptake Inhibitor",
      typeAbbreviation: "SSRI",
      classKey: "ssri",
      icon: "⚡",
      description: "First SSRI approved by FDA",
      discoveredBy: "Bryan Molloy and Klaus Schmiegel at Eli Lilly",
      impact: "Revolutionized depression treatment",
      controversy: "Sparked debates about over-prescription"
    },
    {
      id: 5,
      name: "Venlafaxine (Effexor)",
      year: 1993,
      type: "Serotonin-Norepinephrine Reuptake Inhibitor",
      typeAbbreviation: "SNRI",
      classKey: "snri",
      icon: "🔗",
      description: "First SNRI approved, targeting both serotonin and norepinephrine reuptake",
      discoveredBy: "Researchers at Wyeth Pharmaceuticals",
      impact: "Provided alternative for patients who didn't respond to SSRIs",
      controversy: "Notable withdrawal symptoms when discontinuing treatment"
    },
    {
      id: 6,
      name: "Mirtazapine (Remeron)",
      year: 1996,
      type: "Tetracyclic Antidepressant",
      typeAbbreviation: "TeCA",
      classKey: "teca",
      icon: "🔮",
      description: "Tetracyclic antidepressant with unique receptor profile",
      discoveredBy: "Researchers at Organon",
      impact: "Helpful for patients with insomnia and appetite loss, minimal sexual side effects",
      controversy: "Significant weight gain and sedation as common side effects"
    },
    {
      id: 7,
      name: "Esketamine (Spravato)",
      year: 2019,
      type: "NMDA Receptor Antagonist",
      typeAbbreviation: "NMDA",
      classKey: "nmda",
      icon: "💫",
      description: "Nasal spray for treatment-resistant depression, derived from ketamine",
      discoveredBy: "Janssen Pharmaceuticals",
      impact: "First novel mechanism for depression in decades, rapid-acting effects",
      controversy: "Concerns about abuse potential, dissociative effects, and high cost"
    }
  ],

  antibiotics: [
    {
      id: 1,
      name: "Prontosil (Sulfonamidochrysoidine)",
      year: 1935,
      type: "Sulfonamide",
      typeAbbreviation: "Sulfa",
      classKey: "sulfa",
      icon: "🧪",
      description: "First synthetic antibacterial drug, revolutionized treatment of bacterial infections",
      discoveredBy: "Gerhard Domagk at Bayer Laboratories",
      impact: "Proved that synthetic chemicals could fight bacterial infections, saving countless lives before penicillin",
      controversy: "Nazi Germany's involvement in its development; Domagk was forced to decline the Nobel Prize"
    },
    {
      id: 2,
      name: "Penicillin G (Benzylpenicillin)",
      year: 1942,
      type: "Penicillin",
      typeAbbreviation: "PCN",
      classKey: "penicillin",
      icon: "🔬",
      description: "Discovered by Fleming in 1928 but not mass-produced until WWII, became the first true antibiotic",
      discoveredBy: "Alexander Fleming (1928), mass production by Florey and Chain",
      impact: "Transformed medicine and warfare, saving millions of lives and establishing the antibiotic era",
      controversy: "Fleming received most credit despite Florey and Chain's crucial work on mass production"
    },
    {
      id: 3,
      name: "Streptomycin",
      year: 1943,
      type: "Aminoglycoside",
      typeAbbreviation: "AMG",
      classKey: "aminoglycoside",
      icon: "💊",
      description: "First antibiotic effective against tuberculosis, ending its status as an incurable disease",
      discoveredBy: "Albert Schatz and Selman Waksman at Rutgers University",
      impact: "Made tuberculosis curable, saving millions and proving antibiotics could target previously untreatable diseases",
      controversy: "Credit dispute between Schatz and Waksman; only Waksman received the Nobel Prize"
    },
    {
      id: 4,
      name: "Chloramphenicol (Chloromycetin)",
      year: 1947,
      type: "Amphenicol",
      typeAbbreviation: "CAP",
      classKey: "amphenicol",
      icon: "⚗️",
      description: "First broad-spectrum antibiotic, effective against many bacterial types, paving the way for tetracyclines",
      discoveredBy: "David Gottlieb at Parke-Davis",
      impact: "Demonstrated broad-spectrum antibiotics could target multiple bacteria types simultaneously",
      controversy: "Rare but fatal aplastic anemia side effect led to restricted use despite effectiveness"
    },
    {
      id: 5,
      name: "Vancomycin (Vancocin)",
      year: 1958,
      type: "Glycopeptide",
      typeAbbreviation: "GLYCO",
      classKey: "glycopeptide",
      icon: "🛡️",
      description: "Drug of last resort for resistant gram-positive infections, particularly MRSA",
      discoveredBy: "Edmund Kornfeld at Eli Lilly",
      impact: "Provided critical treatment option for penicillin-resistant bacteria and became essential for MRSA",
      controversy: "Overuse has led to vancomycin-resistant enterococci (VRE), threatening its effectiveness"
    },
    {
      id: 6,
      name: "Methicillin (Staphcillin)",
      year: 1959,
      type: "Penicillinase-resistant Penicillin",
      typeAbbreviation: "PRP",
      classKey: "methicillin",
      icon: "⚔️",
      description: "Developed to combat penicillin-resistant staphylococcus, but led to MRSA evolution",
      discoveredBy: "Beecham Research Laboratories",
      impact: "Temporarily solved penicillin resistance but spurred bacterial evolution",
      controversy: "Rapid emergence of MRSA demonstrated bacteria's ability to overcome new antibiotics"
    },
    {
      id: 7,
      name: "Cephalexin (Keflex)",
      year: 1964,
      type: "First-generation Cephalosporin",
      typeAbbreviation: "1G CEF",
      classKey: "cephalosporin",
      icon: "💉",
      description: "First orally effective cephalosporin, widely used for skin and respiratory infections",
      discoveredBy: "Eli Lilly, based on Giuseppe Brotzu's discovery",
      impact: "Established cephalosporins as major antibiotic class, still widely prescribed today",
      controversy: "Overuse in outpatient settings contributed to resistance patterns"
    },
    {
      id: 8,
      name: "Ciprofloxacin (Cipro)",
      year: 1987,
      type: "Fluoroquinolone",
      typeAbbreviation: "FQ",
      classKey: "fluoroquinolone",
      icon: "⚡",
      description: "Broad-spectrum fluoroquinolone, became one of the most prescribed antibiotics globally",
      discoveredBy: "Bayer AG",
      impact: "Revolutionized treatment of urinary tract and respiratory infections with convenient dosing",
      controversy: "FDA warnings for serious side effects including tendon damage and nerve problems"
    },
    {
      id: 9,
      name: "Linezolid (Zyvox)",
      year: 2000,
      type: "Oxazolidinone",
      typeAbbreviation: "OXZ",
      classKey: "oxazolidinone",
      icon: "🔮",
      description: "First new antibiotic class in 35 years, effective against resistant gram-positive bacteria",
      discoveredBy: "Pharmacia & Upjohn (now Pfizer)",
      impact: "Provided new weapon against MRSA and VRE when resistance threatened existing antibiotics",
      controversy: "Expensive cost limits access; resistance already emerging in some bacterial strains"
    },
    {
      id: 10,
      name: "Daptomycin (Cubicin)",
      year: 2003,
      type: "Lipopeptide",
      typeAbbreviation: "LIPO",
      classKey: "lipopeptide",
      icon: "💫",
      description: "Novel mechanism antibiotic for serious gram-positive infections including endocarditis",
      discoveredBy: "Eli Lilly, later developed by Cubist Pharmaceuticals",
      impact: "Unique mechanism of disrupting bacterial cell membrane offers treatment for complicated infections",
      controversy: "High cost and IV-only administration limits use to hospital settings"
    }
  ],

  antipsychotics: [
    {
      id: 1,
      name: "Chlorpromazine (Thorazine)",
      year: 1952,
      type: "Typical Antipsychotic",
      typeAbbreviation: "FGA",
      classKey: "typical-low",
      icon: "🧪",
      description: "First antipsychotic medication, discovered accidentally while testing surgical anesthetics",
      discoveredBy: "Henri Laborit, Jean Delay, and Pierre Deniker",
      impact: "Revolutionized psychiatric treatment; enabled deinstitutionalization and community-based care for millions",
      controversy: "Severe movement side effects (extrapyramidal symptoms); led to involuntary use and concerns about overmedication"
    },
    {
      id: 2,
      name: "Haloperidol (Haldol)",
      year: 1958,
      type: "Typical Antipsychotic",
      typeAbbreviation: "FGA",
      classKey: "typical-high",
      icon: "💊",
      description: "High-potency typical antipsychotic that became the most widely used for acute psychosis",
      discoveredBy: "Paul Janssen at Janssen Pharmaceuticals",
      impact: "Gold standard for decades; highly effective for positive symptoms; available in long-acting injectable form",
      controversy: "High risk of severe movement disorders including potentially irreversible tardive dyskinesia"
    },
    {
      id: 3,
      name: "Clozapine (Clozaril)",
      year: 1989,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "atypical-clozapine",
      icon: "⚡",
      description: "Superior efficacy antipsychotic discovered in 1972, approved for treatment-resistant schizophrenia in 1989",
      discoveredBy: "Wander AG (now part of Novartis)",
      impact: "Most effective antipsychotic for treatment-resistant cases; fewer movement side effects than typicals",
      controversy: "Rare but potentially fatal agranulocytosis requires lifelong blood monitoring; initially withdrawn, later reintroduced"
    },
    {
      id: 4,
      name: "Risperidone (Risperdal)",
      year: 1993,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "atypical-standard",
      icon: "🔬",
      description: "First successful second-generation antipsychotic widely prescribed as safer alternative to typicals",
      discoveredBy: "Janssen Pharmaceuticals",
      impact: "Established atypicals as first-line treatment; effective for both positive and negative symptoms",
      controversy: "Significant metabolic side effects including weight gain, diabetes; expensive compared to generics"
    },
    {
      id: 5,
      name: "Olanzapine (Zyprexa)",
      year: 1996,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "atypical-standard",
      icon: "💫",
      description: "Highly effective atypical antipsychotic that became a blockbuster medication",
      discoveredBy: "Eli Lilly and Company",
      impact: "One of most prescribed antipsychotics globally; excellent efficacy for acute psychosis and maintenance",
      controversy: "Substantial weight gain and metabolic syndrome risk; litigation over downplayed side effects"
    },
    {
      id: 6,
      name: "Quetiapine (Seroquel)",
      year: 1997,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "atypical-standard",
      icon: "🌙",
      description: "Sedating atypical antipsychotic widely used for psychosis, bipolar disorder, and off-label for sleep",
      discoveredBy: "AstraZeneca",
      impact: "Versatile medication for multiple psychiatric conditions; lower movement disorder risk than older drugs",
      controversy: "Widespread off-label prescribing for insomnia and anxiety; metabolic side effects; street value as sedative"
    },
    {
      id: 7,
      name: "Aripiprazole (Abilify)",
      year: 2002,
      type: "Third-Generation Antipsychotic",
      typeAbbreviation: "TGA",
      classKey: "third-gen",
      icon: "⚙️",
      description: "Partial dopamine agonist that stabilizes dopamine rather than simply blocking it",
      discoveredBy: "Otsuka Pharmaceutical and Bristol-Myers Squibb",
      impact: "Novel mechanism with lower weight gain and metabolic effects; effective for schizophrenia and bipolar",
      controversy: "Activation and restlessness (akathisia) common; expensive; heavily marketed leading to overprescription concerns"
    },
    {
      id: 8,
      name: "Cariprazine (Vraylar)",
      year: 2015,
      type: "Third-Generation Antipsychotic",
      typeAbbreviation: "TGA",
      classKey: "third-gen",
      icon: "🔮",
      description: "Modern partial agonist with preferential binding to D3 receptors, targeting negative symptoms",
      discoveredBy: "Gedeon Richter and Allergan",
      impact: "Potentially superior for negative symptoms and cognitive deficits; represents continued innovation in antipsychotic development",
      controversy: "Very expensive; limited long-term data; unclear if truly superior to older third-generation drugs"
    }
  ],

  opioids: [
    {
      id: 1,
      name: "Morphine",
      year: 1804,
      type: "Natural Opioid Alkaloid",
      typeAbbreviation: "NAT",
      classKey: "natural-opioid",
      icon: "💉",
      description: "First active compound isolated from opium poppy, revolutionized pain management and pharmacology",
      discoveredBy: "Friedrich Sertürner",
      impact: "Established modern pharmacology by proving active ingredients could be isolated from plants; remains gold standard for severe pain",
      controversy: "Highly addictive; widespread use led to addiction epidemic and strict regulation by early 1900s"
    },
    {
      id: 2,
      name: "Codeine",
      year: 1832,
      type: "Natural Opioid Alkaloid",
      typeAbbreviation: "NAT",
      classKey: "natural-opioid",
      icon: "🌿",
      description: "Weaker opioid isolated from opium, widely used for mild pain and cough suppression",
      discoveredBy: "Pierre Jean Robiquet",
      impact: "Provided safer alternative to morphine for moderate pain; still commonly prescribed for cough",
      controversy: "Over-the-counter availability in some countries led to misuse; codeine cough syrup abuse"
    },
    {
      id: 3,
      name: "Heroin (Diacetylmorphine)",
      year: 1898,
      type: "Semi-synthetic Opioid",
      typeAbbreviation: "SEMI",
      classKey: "semisynthetic-opioid",
      icon: "⚠️",
      description: "Synthesized in 1874, marketed by Bayer in 1898 as safe morphine substitute and cough suppressant",
      discoveredBy: "C.R. Alder Wright (1874), marketed by Bayer",
      impact: "Caused massive addiction epidemic; led to international drug control treaties and modern drug regulation",
      controversy: "One of medicine's biggest mistakes; marketed as non-addictive despite being highly addictive; now illegal in most countries"
    },
    {
      id: 4,
      name: "Oxycodone",
      year: 1916,
      type: "Semi-synthetic Opioid",
      typeAbbreviation: "SEMI",
      classKey: "semisynthetic-opioid",
      icon: "💊",
      description: "Semi-synthetic opioid derived from thebaine, later formulated as OxyContin (1996)",
      discoveredBy: "Martin Freund and Edmund Speyer at University of Frankfurt",
      impact: "Effective pain management when used appropriately; became backbone of modern pain treatment",
      controversy: "OxyContin formulation sparked modern opioid epidemic through aggressive marketing and overprescription"
    },
    {
      id: 5,
      name: "Meperidine (Demerol)",
      year: 1939,
      type: "Synthetic Opioid",
      typeAbbreviation: "SYN",
      classKey: "synthetic-opioid",
      icon: "⚗️",
      description: "First fully synthetic opioid, proved pain relief didn't require poppy-derived compounds",
      discoveredBy: "Otto Eisleb and Otto Schaumann at IG Farben",
      impact: "Demonstrated synthetic opioids were possible; widely used in hospitals for decades",
      controversy: "Toxic metabolite accumulation causes seizures; largely replaced by safer alternatives"
    },
    {
      id: 6,
      name: "Methadone (Dolophine)",
      year: 1946,
      type: "Synthetic Opioid",
      typeAbbreviation: "SYN",
      classKey: "synthetic-opioid",
      icon: "🔄",
      description: "Long-acting synthetic opioid developed during WWII morphine shortage, later used for addiction treatment",
      discoveredBy: "Max Bockmühl and Gustav Ehrhart at IG Farben",
      impact: "Revolutionized opioid addiction treatment through maintenance therapy; reduces crime and overdose deaths",
      controversy: "Methadone clinics stigmatized; debate over whether maintenance therapy is treatment or continued addiction"
    },
    {
      id: 7,
      name: "Fentanyl (Sublimaze)",
      year: 1960,
      type: "Synthetic Opioid",
      typeAbbreviation: "SYN",
      classKey: "synthetic-opioid",
      icon: "⚡",
      description: "Extremely potent synthetic opioid (50-100x morphine), revolutionary for anesthesia",
      discoveredBy: "Paul Janssen at Janssen Pharmaceuticals",
      impact: "Transformed surgical anesthesia; enabled safer operations with precise pain control",
      controversy: "Illicit fentanyl now major cause of overdose deaths; tiny amounts are lethal; driving current overdose crisis"
    },
    {
      id: 8,
      name: "Tramadol (Ultram)",
      year: 1977,
      type: "Atypical Opioid",
      typeAbbreviation: "ATYP",
      classKey: "atypical-opioid",
      icon: "💫",
      description: "Weak μ-opioid agonist with additional serotonin/norepinephrine reuptake inhibition",
      discoveredBy: "Grünenthal GmbH",
      impact: "Marketed as safer opioid alternative for moderate pain; widely prescribed globally",
      controversy: "Initially unscheduled in US due to perceived low abuse potential; later scheduled after addiction cases emerged"
    },
    {
      id: 9,
      name: "Buprenorphine (Subutex)",
      year: 1978,
      type: "Partial Opioid Agonist",
      typeAbbreviation: "PARTIAL",
      classKey: "partial-agonist",
      icon: "🛡️",
      description: "Partial μ-opioid agonist with ceiling effect, making it safer than full agonists",
      discoveredBy: "Reckitt & Colman (now Reckitt Benckiser)",
      impact: "Enabled office-based addiction treatment (Suboxone); safer alternative to methadone with lower abuse potential",
      controversy: "Access barriers due to prescribing restrictions; debate over appropriate duration of treatment"
    },
    {
      id: 10,
      name: "Naloxone (Narcan)",
      year: 1961,
      type: "Opioid Antagonist",
      typeAbbreviation: "ANTAG",
      classKey: "antagonist",
      icon: "🚑",
      description: "Opioid receptor antagonist that rapidly reverses opioid overdose by displacing opioids from receptors",
      discoveredBy: "Mozes J. Lewenstein and Jack Fishman at Sankyo",
      impact: "Saves thousands of lives annually; widespread distribution to first responders and public; can be administered by non-medical personnel",
      controversy: "Some argue widespread availability enables continued drug use; debate over requiring prescriptions with opioids"
    }
  ],
  anxiolytics: [
    {
      id: 1,
      name: "Phenobarbital (Luminal)",
      year: 1912,
      type: "Barbiturate",
      typeAbbreviation: "BARB",
      classKey: "barbiturate",
      icon: "⚗️",
      description: "First barbiturate used for anxiety and sedation, highly effective but dangerously addictive",
      discoveredBy: "Emil Fischer and Joseph von Mering",
      impact: "Established pharmacological treatment of anxiety; widely used for decades before benzodiazepines",
      controversy: "Narrow therapeutic window; easy to overdose fatally; highly addictive; largely replaced by safer alternatives"
    },
    {
      id: 2,
      name: "Meprobamate (Miltown)",
      year: 1955,
      type: "Carbamate",
      typeAbbreviation: "CARB",
      classKey: "carbamate",
      icon: "💊",
      description: "First blockbuster tranquilizer, considered America's first lifestyle drug for everyday stress",
      discoveredBy: "Frank Berger at Carter Products",
      impact: "Destigmatized anxiety treatment; made taking pills for stress socially acceptable; paved way for benzodiazepines",
      controversy: "Created culture of pharmaceutical stress relief; highly addictive despite marketing as safe; withdrawal can be fatal"
    },
    {
      id: 3,
      name: "Hydroxyzine (Atarax, Vistaril)",
      year: 1956,
      type: "Antihistamine",
      typeAbbreviation: "H1",
      classKey: "antihistamine",
      icon: "🌿",
      description: "Antihistamine approved for anxiety and allergies; gained renewed interest as non-addictive alternative to benzodiazepines",
      discoveredBy: "Union Chimique Belge",
      impact: "Provided non-addictive option for mild-moderate anxiety; increasingly prescribed as doctors avoid benzodiazepines",
      controversy: "Sedating side effects limit daytime use; less effective than benzodiazepines for severe anxiety"
    },
    {
      id: 4,
      name: "Chlordiazepoxide (Librium)",
      year: 1960,
      type: "Benzodiazepine",
      typeAbbreviation: "BZD",
      classKey: "benzo-long",
      icon: "🔬",
      description: "First benzodiazepine, discovered accidentally; revolutionized anxiety treatment with improved safety profile",
      discoveredBy: "Leo Sternbach at Hoffmann-La Roche",
      impact: "Launched benzodiazepine era; much safer than barbiturates in overdose; enabled outpatient anxiety treatment",
      controversy: "Addiction and dependence potential initially underestimated; withdrawal syndrome can be severe and prolonged"
    },
    {
      id: 5,
      name: "Diazepam (Valium)",
      year: 1963,
      type: "Benzodiazepine",
      typeAbbreviation: "BZD",
      classKey: "benzo-long",
      icon: "💫",
      description: "Most prescribed drug in America during 1970s; cultural icon known as 'mother's little helper'",
      discoveredBy: "Leo Sternbach at Hoffmann-La Roche",
      impact: "Became household name; normalized anxiety medication; versatile uses from anxiety to muscle spasms to alcohol withdrawal",
      controversy: "Overprescribed to women; created pharmaceutical dependence culture; epitomized overmedication of everyday stress"
    },
    {
      id: 6,
      name: "Clonazepam (Klonopin)",
      year: 1975,
      type: "Benzodiazepine",
      typeAbbreviation: "BZD",
      classKey: "benzo-long",
      icon: "🔵",
      description: "Long-acting benzodiazepine used for panic disorder, anxiety, and seizures",
      discoveredBy: "Hoffmann-La Roche",
      impact: "Effective for panic disorder and chronic anxiety; long duration means less frequent dosing",
      controversy: "Very difficult to discontinue due to long half-life; severe withdrawal syndrome; high dependence potential"
    },
    {
      id: 7,
      name: "Lorazepam (Ativan)",
      year: 1977,
      type: "Benzodiazepine",
      typeAbbreviation: "BZD",
      classKey: "benzo-intermediate",
      icon: "⚡",
      description: "Intermediate-acting benzodiazepine; widely used for acute anxiety, panic attacks, and hospital settings",
      discoveredBy: "Wyeth Pharmaceuticals",
      impact: "Balanced duration and potency; became standard for acute anxiety treatment and medical procedures",
      controversy: "High potency leads to rapid dependence; commonly involved in polysubstance overdoses"
    },
    {
      id: 8,
      name: "Alprazolam (Xanax)",
      year: 1981,
      type: "Benzodiazepine",
      typeAbbreviation: "BZD",
      classKey: "benzo-short",
      icon: "⚠️",
      description: "Short-acting, high-potency benzodiazepine; most prescribed psychiatric medication; central to current benzo crisis",
      discoveredBy: "Upjohn Laboratories (now Pfizer)",
      impact: "Extremely effective for panic attacks; fast onset made it highly desirable for acute anxiety relief",
      controversy: "Most abused benzodiazepine; extremely difficult to taper; rebound anxiety between doses; involved in many overdose deaths especially with opioids"
    },
    {
      id: 9,
      name: "Buspirone (BuSpar)",
      year: 1986,
      type: "Azapirone",
      typeAbbreviation: "5-HT1A",
      classKey: "azapirone",
      icon: "🔄",
      description: "First non-benzodiazepine anxiolytic; serotonin partial agonist without addiction potential",
      discoveredBy: "Bristol-Myers Squibb",
      impact: "Proved non-addictive anxiety treatment possible; no sedation or withdrawal; alternative for those with substance abuse history",
      controversy: "Takes weeks to work unlike instant benzo relief; many patients report inadequate efficacy; failed to replace benzodiazepines despite safety advantages"
    },
    {
      id: 10,
      name: "Pregabalin (Lyrica)",
      year: 2004,
      type: "Gabapentinoid",
      typeAbbreviation: "GABA analog",
      classKey: "gabapentinoid",
      icon: "💊",
      description: "Approved for nerve pain and seizures; widely used off-label for anxiety as benzodiazepine alternative",
      discoveredBy: "Richard Bruce Silverman at Northwestern University",
      impact: "Effective for generalized anxiety disorder; works through calcium channels rather than GABA receptors directly",
      controversy: "Increasingly recognized abuse potential; euphoric effects at high doses; scheduling debate; some consider it 'new benzo crisis'"
    }
  ],
  stimulants: [
    {
      id: 1,
      name: "Amphetamine (Benzedrine)",
      year: 1932,
      type: "Amphetamine",
      typeAbbreviation: "AMP",
      classKey: "amphetamine-classic",
      icon: "⚡",
      description: "First medical amphetamine, initially marketed as nasal decongestant inhaler before widespread use as stimulant",
      discoveredBy: "Gordon Alles, marketed by Smith, Kline & French",
      impact: "Established amphetamines in medicine; widely used for fatigue, depression, weight loss; became WWII 'go pills' for military",
      controversy: "Massive civilian abuse when people discovered breaking open inhalers produced powerful stimulant effects; led to addiction epidemic"
    },
    {
      id: 2,
      name: "Methamphetamine (Desoxyn)",
      year: 1943,
      type: "Amphetamine",
      typeAbbreviation: "MAMP",
      classKey: "methamphetamine",
      icon: "💥",
      description: "More potent amphetamine variant; extensively used by all sides during WWII, rarely prescribed today",
      discoveredBy: "Synthesized in 1893 by Nagai Nagayoshi, medical use began 1940s",
      impact: "Fueled WWII military operations (German Pervitin, Allied go-pills); showed stimulants' performance-enhancing effects",
      controversy: "Post-war addiction epidemics; now infamous as illegal street drug 'meth'; minimal legitimate medical use remains"
    },
    {
      id: 3,
      name: "Methylphenidate (Ritalin)",
      year: 1955,
      type: "Phenethylamine",
      typeAbbreviation: "MPH",
      classKey: "methylphenidate",
      icon: "📚",
      description: "First-line ADHD medication for decades; named after inventor's wife Rita who used it for tennis",
      discoveredBy: "Leandro Panizzon at CIBA (now Novartis)",
      impact: "Became standard ADHD treatment; helped millions of children and adults focus; established stimulants as safe and effective for ADHD",
      controversy: "1990s-2000s prescription explosion raised overprescription concerns; 'drugging children to behave' debates; college study drug misuse"
    },
    {
      id: 4,
      name: "Dextroamphetamine (Dexedrine)",
      year: 1976,
      type: "Amphetamine",
      typeAbbreviation: "D-AMP",
      classKey: "dextroamphetamine",
      icon: "🔬",
      description: "Purified right-handed isomer of amphetamine with fewer side effects; used for ADHD and narcolepsy",
      discoveredBy: "Smith, Kline & French (refined from amphetamine)",
      impact: "Demonstrated isomer separation could improve drug profiles; provided smoother, more targeted stimulant effects",
      controversy: "Still carries amphetamine addiction potential; widely diverted for non-medical use"
    },
    {
      id: 5,
      name: "Mixed Amphetamine Salts (Adderall)",
      year: 1996,
      type: "Amphetamine",
      typeAbbreviation: "MAS",
      classKey: "adderall",
      icon: "💊",
      description: "Combination of four amphetamine salts; became most prescribed ADHD medication and notorious college study drug",
      discoveredBy: "Richwood Pharmaceuticals (acquired by Shire)",
      impact: "Dominated ADHD treatment market; highly effective but sparked widespread non-medical use in academics and workplaces",
      controversy: "Massive abuse problem on college campuses; chronic shortages (2022-present); TikTok self-diagnosis trends; addiction concerns"
    },
    {
      id: 6,
      name: "Modafinil (Provigil)",
      year: 1998,
      type: "Eugeroic",
      typeAbbreviation: "MOD",
      classKey: "modafinil",
      icon: "🌟",
      description: "Wakefulness-promoting agent with unknown mechanism; approved for narcolepsy but widely used off-label for cognitive enhancement",
      discoveredBy: "Michel Jouvet, developed by Lafon Laboratories",
      impact: "Provided alternative to traditional stimulants; popular for shift work, jet lag; military use; 'limitless pill' reputation",
      controversy: "Extensive off-label use for cognitive enhancement; unclear long-term safety; debates over 'neuroenhancement' ethics"
    },
    {
      id: 7,
      name: "Methylphenidate ER (Concerta)",
      year: 2000,
      type: "Phenethylamine",
      typeAbbreviation: "MPH-ER",
      classKey: "methylphenidate-er",
      icon: "⏰",
      description: "Extended-release methylphenidate using osmotic pump technology; provides smooth 12-hour coverage",
      discoveredBy: "ALZA Corporation (acquired by Johnson & Johnson)",
      impact: "Revolutionized ADHD treatment with once-daily dosing; reduced stigma of school nurse visits; improved medication adherence",
      controversy: "Expensive compared to generic immediate-release; teens learned to defeat extended-release mechanism for abuse"
    },
    {
      id: 8,
      name: "Atomoxetine (Strattera)",
      year: 2002,
      type: "SNRI",
      typeAbbreviation: "SNRI",
      classKey: "atomoxetine",
      icon: "🔄",
      description: "First non-stimulant ADHD medication; selective norepinephrine reuptake inhibitor without abuse potential",
      discoveredBy: "Eli Lilly and Company",
      impact: "Proved ADHD treatable without stimulants; option for patients with substance abuse history or stimulant side effects",
      controversy: "Takes 4-6 weeks to work unlike immediate stimulant effects; many patients find it less effective; rare suicidal ideation warning"
    },
    {
      id: 9,
      name: "Lisdexamfetamine (Vyvanse)",
      year: 2007,
      type: "Prodrug Amphetamine",
      typeAbbreviation: "LDX",
      classKey: "lisdexamfetamine",
      icon: "🛡️",
      description: "Prodrug design bonds amphetamine to lysine; body must cleave it for activation, reducing abuse potential",
      discoveredBy: "Shire Pharmaceuticals (now Takeda)",
      impact: "Smoothest, longest-lasting amphetamine formulation; can't be snorted or injected effectively; once-daily dosing",
      controversy: "Expensive with limited generics; still can be abused orally; questioned whether prodrug design truly reduces misuse"
    },
    {
      id: 10,
      name: "Guanfacine (Intuniv)",
      year: 2009,
      type: "Alpha-2 Agonist",
      typeAbbreviation: "α2",
      classKey: "guanfacine",
      icon: "🧠",
      description: "Non-stimulant alpha-2 adrenergic agonist; enhances prefrontal cortex function without dopamine stimulation",
      discoveredBy: "Originally for hypertension, repurposed for ADHD by Shire",
      impact: "Provides stimulant-free option for ADHD; particularly effective for impulsivity and emotional regulation; no abuse potential",
      controversy: "Sedation and blood pressure effects; less effective than stimulants for many; takes weeks to reach full effect"
    }
  ],
  moodStabilizers: [
    {
      id: 1,
      name: "Lithium",
      year: 1949,
      type: "Alkali Metal",
      typeAbbreviation: "Li",
      classKey: "lithium",
      icon: "🪨",
      description: "Serendipitously discovered by John Cade; first medication to treat and prevent both mania and depression",
      discoveredBy: "John Cade (Australia)",
      impact: "Transformed bipolar disorder from chronic institutionalization to manageable condition; gold standard for 75+ years; best suicide prevention",
      controversy: "Ignored for 20+ years because it couldn't be patented; narrow therapeutic window requires blood monitoring; kidney and thyroid side effects; prescribing declining despite superior evidence"
    },
    {
      id: 2,
      name: "Carbamazepine (Tegretol)",
      year: 1974,
      type: "Anticonvulsant",
      typeAbbreviation: "CBZ",
      classKey: "carbamazepine",
      icon: "⚡",
      description: "Anticonvulsant repurposed for bipolar disorder; particularly effective for rapid cycling",
      discoveredBy: "Walter Schindler at Geigy Pharmaceuticals (1953), bipolar use discovered 1970s",
      impact: "Provided alternative for lithium non-responders; showed anticonvulsants could stabilize mood; established new treatment class",
      controversy: "Serious drug interactions; requires blood monitoring; rare but dangerous side effects (Stevens-Johnson syndrome, aplastic anemia)"
    },
    {
      id: 3,
      name: "Valproate (Depakote)",
      year: 1995,
      type: "Anticonvulsant",
      typeAbbreviation: "VPA",
      classKey: "valproate",
      icon: "💊",
      description: "First anticonvulsant FDA-approved for acute mania; faster onset than lithium",
      discoveredBy: "Pierre Eymard (1962 for epilepsy), Charles Bowden led bipolar trials",
      impact: "Became first-line alternative to lithium; works faster for acute mania; broader therapeutic window than lithium",
      controversy: "Severe birth defects (never use in pregnancy); weight gain; tremor; hair loss; associated with polycystic ovary syndrome"
    },
    {
      id: 4,
      name: "Olanzapine (Zyprexa)",
      year: 2000,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "olanzapine-bipolar",
      icon: "🔷",
      description: "First atypical antipsychotic approved for bipolar mania; highly effective but significant metabolic effects",
      discoveredBy: "Eli Lilly (1996 for schizophrenia, 2000 for bipolar)",
      impact: "Established atypical antipsychotics as mood stabilizers; fast-acting for acute mania; no blood monitoring required",
      controversy: "Substantial weight gain and metabolic syndrome; diabetes risk; some argue lithium abandonment for easier-to-prescribe but more harmful alternatives"
    },
    {
      id: 5,
      name: "Lamotrigine (Lamictal)",
      year: 2003,
      type: "Anticonvulsant",
      typeAbbreviation: "LTG",
      classKey: "lamotrigine",
      icon: "🌙",
      description: "Rare mood stabilizer that treats bipolar depression rather than just mania; maintenance treatment",
      discoveredBy: "GlaxoSmithKline",
      impact: "Filled critical gap - most mood stabilizers only treat mania; became preferred for bipolar II and depression-predominant bipolar",
      controversy: "Very slow titration required (weeks) to avoid Stevens-Johnson syndrome; doesn't work for acute mania; ineffective without proper titration"
    },
    {
      id: 6,
      name: "Olanzapine-Fluoxetine (Symbyax)",
      year: 2003,
      type: "Combination",
      typeAbbreviation: "OFC",
      classKey: "symbyax",
      icon: "💫",
      description: "First FDA-approved combination specifically for bipolar depression; pairs atypical antipsychotic with SSRI",
      discoveredBy: "Eli Lilly",
      impact: "Validated combination approach; showed antidepressants could be used safely in bipolar if combined with mood stabilizer; addressed treatment-resistant bipolar depression",
      controversy: "Expensive branded combination when generics available separately; massive weight gain from olanzapine component; questions about whether combination truly superior"
    },
    {
      id: 7,
      name: "Quetiapine (Seroquel)",
      year: 2004,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "quetiapine-bipolar",
      icon: "🌟",
      description: "Approved for both bipolar mania and depression; unusually versatile mood stabilizer",
      discoveredBy: "AstraZeneca (1997 for schizophrenia, 2004 for bipolar)",
      impact: "One of few medications treating both poles of bipolar; became widely prescribed for bipolar depression specifically; flexible dosing",
      controversy: "Sedating at clinical doses; metabolic side effects; widespread off-label use for insomnia; questions about efficacy at lower doses"
    },
    {
      id: 8,
      name: "Aripiprazole (Abilify)",
      year: 2004,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "aripiprazole-bipolar",
      icon: "⚙️",
      description: "Partial dopamine agonist approved for bipolar mania; lower metabolic side effects than other atypicals",
      discoveredBy: "Otsuka/Bristol-Myers Squibb (2002 for schizophrenia, 2004 for bipolar)",
      impact: "Dopamine stabilizer mechanism offered theoretical advantage; less weight gain than olanzapine/quetiapine; long-acting injectable available for maintenance",
      controversy: "Activation and akathisia (restlessness) common; less effective for acute mania than other antipsychotics; heavily marketed leading to overuse"
    },
    {
      id: 9,
      name: "Lurasidone (Latuda)",
      year: 2013,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "lurasidone",
      icon: "🌊",
      description: "Specifically developed and approved for bipolar depression; must be taken with food for absorption",
      discoveredBy: "Sunovion Pharmaceuticals",
      impact: "Provided newer option for difficult-to-treat bipolar depression; relatively favorable metabolic profile; once-daily dosing",
      controversy: "Expensive with limited generic availability; akathisia side effect; requirement to take with 350+ calories complicates adherence"
    },
    {
      id: 10,
      name: "Cariprazine (Vraylar)",
      year: 2015,
      type: "Atypical Antipsychotic",
      typeAbbreviation: "SGA",
      classKey: "cariprazine-bipolar",
      icon: "🔮",
      description: "Third-generation partial agonist approved for bipolar mania and depression; preferential D3 binding",
      discoveredBy: "Gedeon Richter/Allergan",
      impact: "Treats both poles of bipolar; represents continued innovation in dopamine stabilizer approach; very long half-life enables stable dosing",
      controversy: "Very expensive; long half-life (weeks) means side effects persist long after stopping; unclear if truly superior to older options"
    }
  ],
  diabetes: [
  {
    id: 1,
    name: "Insulin (Animal-derived)",
    year: 1922,
    type: "Pancreatic Extract Hormone",
    typeAbbreviation: "INS",
    classKey: "insulin-animal",
    icon: "💉",
    description: "First effective diabetes treatment, extracted from animal pancreases; transformed diabetes from death sentence to manageable condition",
    discoveredBy: "Frederick Banting, Charles Best, and J.J.R. Macleod",
    impact: "One of medicine's greatest breakthroughs; children dying from diabetic coma could be saved within hours. Banting and Macleod won Nobel Prize in 1923.",
    controversy: "Banting was furious Macleod shared the Nobel Prize despite minimal involvement; Banting split his prize money with Best. Early insulin caused allergic reactions and required multiple daily injections."
  },
  {
    id: 2,
    name: "NPH Insulin (Isophane)",
    year: 1946,
    type: "Intermediate-acting Insulin",
    typeAbbreviation: "NPH",
    classKey: "insulin-nph",
    icon: "⏱️",
    description: "First longer-acting insulin using protamine to slow absorption; reduced injection frequency from 4-6 to 2 times daily",
    discoveredBy: "Hans Christian Hagedorn",
    impact: "Dramatically improved quality of life by reducing daily injections; became standard basal insulin for decades until insulin analogs",
    controversy: "Variable absorption and peak times caused unpredictable blood sugars; 'NPH peaks' led to hypoglycemia requiring perfectly timed meals"
  },
  {
    id: 3,
    name: "Metformin (Glucophage)",
    year: 1957,
    type: "Biguanide",
    typeAbbreviation: "BIG",
    classKey: "biguanide",
    icon: "💊",
    description: "Derived from French lilac herb used in medieval medicine; reduces liver glucose production without causing hypoglycemia",
    discoveredBy: "Jean Sterne at Laboratoires Aron (based on earlier biguanide research)",
    impact: "Most prescribed diabetes medication globally; first-line therapy for type 2 diabetes. Cardiovascular benefits beyond glucose control. Dirt cheap as generic.",
    controversy: "Delayed FDA approval until 1994 due to fears about lactic acidosis (seen with different biguanide phenformin). French lilac historically used as diuretic, not diabetes treatment."
  },
  {
    id: 4,
    name: "Tolbutamide (Orinase)",
    year: 1956,
    type: "Sulfonylurea",
    typeAbbreviation: "SU",
    classKey: "sulfonylurea",
    icon: "🔑",
    description: "First oral diabetes medication; stimulates pancreas to release insulin by closing potassium channels in beta cells",
    discoveredBy: "Discovered at Hoechst AG; developed from sulfonamide antibiotics research",
    impact: "Proved type 2 diabetes could be treated with pills, not just insulin injections. Revolutionized diabetes care for millions.",
    controversy: "1970 UGDP study suggested increased cardiovascular deaths, sparking decades of debate. Causes weight gain and hypoglycemia. Many patients eventually require insulin anyway."
  },
  {
    id: 5,
    name: "Acarbose (Precose)",
    year: 1990,
    type: "Alpha-Glucosidase Inhibitor",
    typeAbbreviation: "AGI",
    classKey: "alpha-glucosidase",
    icon: "🛡️",
    description: "Blocks intestinal enzymes that break down complex carbohydrates, slowing glucose absorption after meals",
    discoveredBy: "Bayer AG, isolated from Actinoplanes bacteria",
    impact: "First drug targeting post-meal glucose spikes; demonstrated multiple mechanisms could treat diabetes. Modest efficacy but no hypoglycemia risk.",
    controversy: "Severe gastrointestinal side effects (gas, bloating, diarrhea) limit use. Must be taken with every meal. Never achieved widespread adoption despite theoretical appeal."
  },
  {
    id: 6,
    name: "Rosiglitazone (Avandia)",
    year: 1999,
    type: "Thiazolidinedione",
    typeAbbreviation: "TZD",
    classKey: "thiazolidinedione",
    icon: "🔬",
    description: "PPAR-gamma agonist that increases insulin sensitivity in muscle and fat tissue; reduces insulin resistance",
    discoveredBy: "GlaxoSmithKline",
    impact: "Addressed insulin resistance directly rather than just increasing insulin. Showed diabetes could be treated by improving insulin action, not just increasing insulin.",
    controversy: "2007 meta-analysis linked to increased heart attack risk, leading to severe FDA restrictions. Also causes weight gain, fluid retention, heart failure, bone fractures. Largely abandoned despite efficacy."
  },
  {
    id: 7,
    name: "Exenatide (Byetta)",
    year: 2005,
    type: "GLP-1 Receptor Agonist",
    typeAbbreviation: "GLP-1",
    classKey: "glp1-agonist",
    icon: "🦎",
    description: "Synthetic version of protein found in Gila monster saliva; mimics incretin hormone GLP-1 to increase insulin and decrease glucagon",
    discoveredBy: "Discovered by John Eng; developed by Amylin/Eli Lilly from Gila monster venom compound exendin-4",
    impact: "First incretin mimetic; caused weight LOSS unlike other diabetes drugs. Revolutionized type 2 diabetes treatment. Led to blockbuster drugs Ozempic, Wegovy, Mounjaro.",
    controversy: "Injectable only, nausea common. Pancreatitis concerns debated for years. Now explosively popular for weight loss (often off-label), causing shortages for diabetics."
  },
  {
    id: 8,
    name: "Sitagliptin (Januvia)",
    year: 2006,
    type: "DPP-4 Inhibitor",
    typeAbbreviation: "DPP-4",
    classKey: "dpp4-inhibitor",
    icon: "🔐",
    description: "Blocks enzyme that breaks down incretin hormones, extending their glucose-lowering effects without injections",
    discoveredBy: "Merck",
    impact: "First oral incretin-based therapy; well-tolerated with low side effects. Proved incretin pathway could be targeted multiple ways (agonists vs enzyme inhibitors).",
    controversy: "Expensive with modest efficacy. Pancreatitis concerns similar to GLP-1 agonists. Overshadowed by more effective GLP-1 drugs despite being pills. Cardiovascular outcome trials showed 'non-inferiority' not superiority."
  },
  {
    id: 9,
    name: "Canagliflozin (Invokana)",
    year: 2013,
    type: "SGLT2 Inhibitor",
    typeAbbreviation: "SGLT2",
    classKey: "sglt2-inhibitor",
    icon: "⚡",
    description: "Makes kidneys excrete excess glucose in urine; entirely novel mechanism independent of insulin",
    discoveredBy: "Janssen Pharmaceuticals",
    impact: "Revolutionary insulin-independent mechanism. Unexpected cardiovascular and kidney protective benefits transformed diabetes care. Weight loss bonus. Major paradigm shift.",
    controversy: "Increased genital yeast infections and urinary tract infections. Rare but serious: diabetic ketoacidosis even with normal blood sugar, Fournier's gangrene (flesh-eating infection), lower limb amputations with canagliflozin."
  },
  {
    id: 10,
    name: "Semaglutide (Ozempic/Wegovy)",
    year: 2017,
    type: "Long-acting GLP-1 Receptor Agonist",
    typeAbbreviation: "GLP-1",
    classKey: "glp1-long",
    icon: "🌟",
    description: "Once-weekly GLP-1 agonist; same class as exenatide but longer-acting with dramatic weight loss (15%+ body weight)",
    discoveredBy: "Novo Nordisk",
    impact: "Cultural phenomenon; transformed obesity treatment. Showed diabetes drugs could have massive cardiometabolic benefits. Ozempic became household name. Oral version (Rybelsus) first oral GLP-1.",
    controversy: "Massive shortage due to off-label weight loss prescribing by celebrities and non-diabetics. Extremely expensive (~$1000/month). 'Ozempic face' from rapid weight loss. Rebound weight gain when stopped. Equity concerns about access."
  }
],
anticoagulants: [
  {
    id: 1,
    name: "Heparin",
    year: 1916,
    type: "Natural Anticoagulant",
    typeAbbreviation: "UFH",
    classKey: "heparin",
    icon: "💉",
    description: "First injectable anticoagulant discovered in dog livers; activates antithrombin to prevent clot formation",
    discoveredBy: "Jay McLean (discovered), William Howell (named and developed)",
    impact: "Enabled cardiac surgery, dialysis, and acute clot treatment. Still essential in hospitals for immediate anticoagulation and during procedures.",
    controversy: "Requires IV administration and monitoring; heparin-induced thrombocytopenia (HIT) paradoxically causes dangerous clots. Animal-derived product raised concerns."
  },
  {
    id: 2,
    name: "Warfarin (Coumadin)",
    year: 1954,
    type: "Vitamin K Antagonist",
    typeAbbreviation: "VKA",
    classKey: "warfarin",
    icon: "🐀",
    description: "Developed from moldy clover that killed cattle; marketed as rat poison before becoming medicine after saving President Eisenhower",
    discoveredBy: "Karl Paul Link and team at University of Wisconsin",
    impact: "Dominated anticoagulation for 60 years; prevented millions of strokes in atrial fibrillation. Most dramatic example of pesticide-to-medicine transformation.",
    controversy: "Narrow therapeutic window requires constant blood monitoring; extensive food/drug interactions; 'rat poison' stigma persists despite saving millions of lives"
  },
  {
    id: 3,
    name: "Aspirin (for cardiovascular use)",
    year: 1974,
    type: "Antiplatelet Agent",
    typeAbbreviation: "ASA",
    classKey: "aspirin",
    icon: "💊",
    description: "Ancient pain reliever repurposed for cardiovascular protection; irreversibly blocks COX-1 enzyme preventing platelet aggregation",
    discoveredBy: "Synthesized 1899 by Bayer; cardiovascular benefits proven in 1970s trials",
    impact: "Revolutionized heart attack and stroke prevention; dirt cheap and accessible worldwide. One of medicine's most prescribed drugs globally.",
    controversy: "Over-prescribed to low-risk patients who face bleeding risks without benefits; recent guidelines restricted routine use for primary prevention"
  },
  {
    id: 4,
    name: "Enoxaparin (Lovenox)",
    year: 1993,
    type: "Low Molecular Weight Heparin",
    typeAbbreviation: "LMWH",
    classKey: "lmwh",
    icon: "🔬",
    description: "Refined version of heparin with predictable dosing; can be self-injected at home unlike unfractionated heparin",
    discoveredBy: "Developed by Sanofi from traditional heparin",
    impact: "Enabled outpatient treatment of blood clots; pregnant women can safely anticoagulate; bridging therapy for surgery. More convenient than UFH.",
    controversy: "Still requires injections (not oral); expensive compared to heparin; dose adjustments needed in kidney disease and obesity"
  },
  {
    id: 5,
    name: "Clopidogrel (Plavix)",
    year: 1997,
    type: "P2Y12 Platelet Inhibitor",
    typeAbbreviation: "P2Y12",
    classKey: "clopidogrel",
    icon: "💳",
    description: "Powerful antiplatelet blocking ADP receptors; became second-best-selling drug globally after stent procedures exploded",
    discoveredBy: "Sanofi-Synthelabo and Bristol-Myers Squibb",
    impact: "Standard therapy after coronary stents and heart attacks; dual antiplatelet therapy (aspirin + Plavix) prevented stent thrombosis. Over $7 billion annually at peak.",
    controversy: "Expensive blockbuster ($200/month pre-generic); genetic variations (CYP2C19) make it ineffective in 25-30% of patients who can't metabolize prodrug"
  },
  {
    id: 6,
    name: "Fondaparinux (Arixtra)",
    year: 2001,
    type: "Synthetic Factor Xa Inhibitor",
    typeAbbreviation: "FXa-I",
    classKey: "fondaparinux",
    icon: "⚗️",
    description: "First synthetic selective Factor Xa inhibitor; bridge between heparins and DOACs showing specific factor targeting was possible",
    discoveredBy: "GlaxoSmithKline (based on heparin's active pentasaccharide sequence)",
    impact: "Proved concept of selective Factor Xa inhibition; safer alternative to heparin for HIT patients; paved way for oral Factor Xa inhibitors.",
    controversy: "Injectable only (subcutaneous); no antidote; expensive; largely overshadowed by oral DOACs that emerged decade later"
  },
  {
    id: 7,
    name: "Dabigatran (Pradaxa)",
    year: 2010,
    type: "Direct Thrombin Inhibitor",
    typeAbbreviation: "DTI",
    classKey: "dabigatran",
    icon: "🔑",
    description: "First oral direct thrombin inhibitor; first DOAC approved, beginning the revolution away from warfarin",
    discoveredBy: "Boehringer Ingelheim",
    impact: "Shattered belief that oral anticoagulation required warfarin-like mechanisms; no monitoring needed. Opened floodgates for DOAC development.",
    controversy: "Initially no reversal agent (approved 2015); twice-daily dosing less convenient; early bleeding concerns; expensive ($400-500/month); dyspepsia side effect common"
  },
  {
    id: 8,
    name: "Rivaroxaban (Xarelto)",
    year: 2011,
    type: "Direct Factor Xa Inhibitor",
    typeAbbreviation: "FXa",
    classKey: "rivaroxaban",
    icon: "⚡",
    description: "First oral Factor Xa inhibitor; once-daily dosing revolutionized convenience compared to warfarin's complexity",
    discoveredBy: "Bayer and Janssen Pharmaceuticals",
    impact: "Became one of top-selling drugs globally; massive atrial fibrillation and DVT/PE trials proved non-inferiority to warfarin with better safety profile.",
    controversy: "Major bleeding events highly publicized despite being less than warfarin; thousands of lawsuits over bleeding deaths; reversal agent delay"
  },
  {
    id: 9,
    name: "Apixaban (Eliquis)",
    year: 2012,
    type: "Direct Factor Xa Inhibitor",
    typeAbbreviation: "FXa",
    classKey: "apixaban",
    icon: "🌟",
    description: "Most prescribed DOAC; twice-daily Factor Xa inhibitor with best balance of efficacy and safety in trials",
    discoveredBy: "Bristol-Myers Squibb and Pfizer",
    impact: "ARISTOTLE trial showed superiority to warfarin for stroke prevention AND lower bleeding; became gold-standard DOAC. Surpassed Xarelto in prescriptions.",
    controversy: "Twice-daily dosing (vs. once-daily rivaroxaban); extremely expensive ($500+/month); insurance often requires warfarin failure first; missed doses = immediate loss of protection"
  },
  {
    id: 10,
    name: "Andexanet alfa (Andexxa)",
    year: 2018,
    type: "DOAC Reversal Agent",
    typeAbbreviation: "REV",
    classKey: "reversal-agent",
    icon: "🚑",
    description: "First reversal agent for Factor Xa inhibitors; recombinant modified Factor Xa that binds anticoagulants, neutralizing them during life-threatening bleeds",
    discoveredBy: "Portola Pharmaceuticals (now Alexion)",
    impact: "Solved critical safety concern about DOACs—'what if patient has major bleed?' Now emergency medicine can reverse Eliquis/Xarelto bleeding rapidly.",
    controversy: "Phenomenally expensive ($25,000-50,000 per dose); limited evidence for improved outcomes; thrombosis risk after reversal; availability issues at smaller hospitals"
  }
],
antivirals: [
  {
    id: 1,
    name: "Acyclovir (Zovirax)",
    year: 1982,
    type: "Nucleoside Analog",
    typeAbbreviation: "NA",
    classKey: "acyclovir",
    icon: "🔬",
    description: "First truly effective antiviral drug; selectively activated by viral enzymes, proving antivirals were possible",
    discoveredBy: "Gertrude Elion and team at Burroughs Wellcome (Nobel Prize 1988)",
    impact: "Shattered belief that viruses were untreatable; transformed herpes from painful recurring condition to manageable disease. Pioneered rational drug design based on viral enzyme selectivity.",
    controversy: "Only suppresses herpes, doesn't cure it; virus remains dormant in nerve cells forever. Resistance can develop with overuse."
  },
  {
    id: 2,
    name: "Zidovudine/AZT (Retrovir)",
    year: 1987,
    type: "Nucleoside Reverse Transcriptase Inhibitor",
    typeAbbreviation: "NRTI",
    classKey: "azt",
    icon: "💊",
    description: "First HIV drug, originally failed cancer drug from 1964; fastest FDA approval in history amid AIDS crisis desperation",
    discoveredBy: "Jerome Horwitz (1964), repurposed for HIV by Burroughs Wellcome",
    impact: "Proved HIV could be fought with drugs; gave hope during darkest AIDS crisis years. Set template for retroviral drug development.",
    controversy: "Brutal side effects (anemia, nausea); HIV rapidly developed resistance; extremely expensive ($10,000/year 1987). Monotherapy inadequate—patients still died, just slower."
  },
  {
    id: 3,
    name: "Saquinavir (Invirase)",
    year: 1995,
    type: "HIV Protease Inhibitor",
    typeAbbreviation: "PI",
    classKey: "protease-inhibitor",
    icon: "🔑",
    description: "First HIV protease inhibitor; blocks enzyme that cuts viral proteins, preventing HIV maturation into infectious particles",
    discoveredBy: "Hoffmann-La Roche",
    impact: "Enabled HAART (Highly Active Antiretroviral Therapy) by targeting different enzyme than NRTIs. When combined with NRTIs in 1996, created the 'Lazarus effect'—dying AIDS patients rose from deathbeds.",
    controversy: "Required refrigeration initially; poor absorption; needed ritonavir boost. Early pills were huge and required strict meal timing. Resistance developed if not combined with other drugs."
  },
  {
    id: 4,
    name: "HAART Combination Therapy",
    year: 1996,
    type: "Multi-drug Combination",
    typeAbbreviation: "HAART",
    classKey: "haart",
    icon: "💫",
    description: "Revolutionary triple-drug regimen (2 NRTIs + 1 PI); prevents resistance by attacking HIV at multiple points simultaneously",
    discoveredBy: "Concept proven by multiple research groups; announced at 1996 Vancouver AIDS Conference",
    impact: "Transformed HIV from 100% fatal to manageable chronic disease IN ONE YEAR. The 'Lazarus effect'—patients on deathbeds returned to health. AIDS deaths plummeted 47% in 1996-1997. One of medicine's greatest triumphs.",
    controversy: "Required taking 20+ pills daily on strict schedules initially; severe side effects; lifelong commitment; didn't cure HIV, just suppressed it. Access inequality—millions in developing world couldn't afford it."
  },
  {
    id: 5,
    name: "Oseltamivir (Tamiflu)",
    year: 1999,
    type: "Neuraminidase Inhibitor",
    typeAbbreviation: "NAI",
    classKey: "neuraminidase",
    icon: "🦠",
    description: "Blocks influenza neuraminidase enzyme, trapping virus inside infected cells; became pandemic preparedness stockpile drug",
    discoveredBy: "Gilead Sciences (designed), licensed to Roche",
    impact: "First oral flu treatment; governments stockpiled billions of dollars worth for pandemic preparedness. Widely prescribed during 2009 H1N1 'swine flu' pandemic.",
    controversy: "Modest benefits—reduces flu duration by ~1 day if started within 48 hours. Effectiveness debated; some studies suggest overhyped. Stockpiling costs versus actual benefit questioned. Resistance emerging."
  },
  {
    id: 6,
    name: "Tenofovir/Emtricitabine (Truvada)",
    year: 2004,
    type: "Fixed-dose NRTI Combination",
    typeAbbreviation: "NRTI",
    classKey: "truvada",
    icon: "🛡️",
    description: "Two NRTIs in one pill; later approved for PrEP (pre-exposure prophylaxis) allowing HIV-negative people to prevent infection",
    discoveredBy: "Gilead Sciences",
    impact: "Simplified HIV treatment to fewer pills. **REVOLUTIONARY for PrEP (2012 approval)**: 99% reduction in HIV transmission risk for HIV-negative people taking daily pill. Enabled 'undetectable = untransmittable' (U=U) era.",
    controversy: "PrEP approval sparked moral panic about 'encouraging risky behavior.' Insurance coverage battles. Gilead's patent extension tactics criticized. Kidney and bone density side effects in some patients."
  },
  {
    id: 7,
    name: "Sofosbuvir (Sovaldi)",
    year: 2013,
    type: "NS5B Polymerase Inhibitor",
    typeAbbreviation: "DAA",
    classKey: "sofosbuvir",
    icon: "🎯",
    description: "Hepatitis C direct-acting antiviral; first drug that could CURE chronic HCV in 12 weeks with 95%+ success rate",
    discoveredBy: "Michael Sofia at Pharmasset (acquired by Gilead for $11 billion)",
    impact: "Made Hepatitis C the FIRST chronic viral infection curable with pills alone. 95%+ cure rate in 8-12 weeks, oral only, minimal side effects. Eliminated need for brutal interferon injections.",
    controversy: "INFAMOUS for pricing: $84,000 for 12-week treatment ($1,000/pill). Sparked national outrage over drug costs. Insurance companies refused coverage. Generic versions in India cost $300. Poster child for pharmaceutical greed despite miracle cure."
  },
  {
    id: 8,
    name: "Biktarvy",
    year: 2018,
    type: "Single-Tablet Regimen",
    typeAbbreviation: "STR",
    classKey: "biktarvy",
    icon: "💊",
    description: "Three drugs in one small pill once daily (bictegravir + TAF + emtricitabine); represents modern HIV treatment convenience",
    discoveredBy: "Gilead Sciences",
    impact: "Exemplifies how far HIV treatment has come: ONE small pill, ONCE daily, minimal side effects, normal lifespan. High barrier to resistance. Allows people with HIV to live completely normal lives.",
    controversy: "Extremely expensive ($3,000+/month in US); Gilead criticized for high pricing on lifesaving medications while benefiting from NIH-funded research. Patent disputes over TAF formulation."
  },
  {
    id: 9,
    name: "COVID-19 mRNA Vaccines (Pfizer/Moderna)",
    year: 2020,
    type: "mRNA Vaccine Platform",
    typeAbbreviation: "mRNA",
    classKey: "mrna-vaccine",
    icon: "💉",
    description: "First approved mRNA vaccines; designed in 48 hours, 95% effective, approved in 11 months—fastest vaccine development in history",
    discoveredBy: "Katalin Karikó, Drew Weissman (mRNA tech); BioNTech/Pfizer, Moderna (vaccines)",
    impact: "Ended COVID lockdowns, saved millions of lives. Shattered vaccine development timeline records (previous: 4 years for mumps). Proved mRNA platform for future pandemics. Nobel Prize 2023 for Karikó and Weissman.",
    controversy: "Politicized beyond belief; misinformation explosion; mandates sparked backlash; rare myocarditis in young males; ongoing debates about boosters, efficacy duration, variant escape. Equity issues—wealthy nations hoarded doses."
  },
  {
    id: 10,
    name: "Nirmatrelvir/ritonavir (Paxlovid)",
    year: 2021,
    type: "Protease Inhibitor Combination",
    typeAbbreviation: "PI",
    classKey: "paxlovid",
    icon: "🏠",
    description: "First effective oral COVID-19 treatment; 89% reduction in hospitalization/death if started within 5 days of symptoms",
    discoveredBy: "Pfizer",
    impact: "Provided at-home COVID treatment option, reducing burden on hospitals. Especially important for high-risk patients. Represents rapid antiviral development leveraging existing protease inhibitor knowledge.",
    controversy: "'Paxlovid rebound'—symptoms return after treatment in some patients. Must start very early. Many drug interactions due to ritonavir booster. Horrible metallic taste. Underutilized despite availability."
  }
]
};

// ============================================
// JOURNEY TEXTS
// ============================================

const journeyTexts = {
  antidepressants: {
    title: "The Journey",
    text: "The history of antidepressants began serendipitously in the 1950s when researchers noticed mood improvements in tuberculosis patients. From these accidental discoveries emerged entire classes of medications that would transform mental health treatment, evolving from broad-acting compounds to precisely targeted therapies."
  },
  antibiotics: {
    title: "The Journey",
    text: "The antibiotic era began with accidental discoveries and systematic research that transformed medicine. From Fleming's contaminated petri dish to targeted molecular designs, antibiotics have saved countless lives while sparking an evolutionary arms race with bacteria. This timeline traces humanity's ongoing battle against bacterial infections."
  },
  antipsychotics: {
    title: "The Journey",
    text: "Before 1950, psychotic disorders meant lifelong institutionalization with barbaric treatments. The accidental discovery of chlorpromazine revolutionized psychiatry, emptying asylums and enabling community care. Yet the journey from chemical restraint to targeted therapy continues, balancing efficacy against debilitating side effects as we seek medications that truly restore rather than merely suppress."
  },
  opioids: {
    title: "The Journey",
    text: "Opioids represent medicine's greatest paradox: our most effective pain relievers are also among our most dangerous drugs. From ancient poppy cultivation to modern synthetic compounds, this class of medications has both alleviated immense suffering and caused devastating addiction crises. This timeline traces the delicate balance between miracle and tragedy."
  },
  anxiolytics: {
    title: "The Journey",
    text: "Anxiety treatment evolved from deadly barbiturates to seemingly miraculous benzodiazepines, which dominated medicine for decades. Yet the promise of safe anxiety relief proved elusive—dependence, withdrawal, and overprescription created new crises. While modern alternatives like SSRIs and buspirone offer non-addictive options, they lack the immediate relief that made benzos indispensable. The search for truly safe anxiolytics continues, balancing efficacy against the ever-present shadow of addiction."
  },
  stimulants: {
    title: "The Journey",
    text: "From accidental discovery in nasal decongestants to fueling WWII armies, stimulants transformed from performance enhancers to essential ADHD treatments. Charles Bradley's 1937 observation that hyperactive children became calmer on Benzedrine sparked decades of research into the 'stimulant paradox.' Today, while medications like Adderall and Ritalin help millions focus, they also fuel academic pressure and substance misuse debates. The search continues for effective treatments that balance therapeutic benefit against abuse potential, as modern alternatives like Vyvanse and non-stimulants offer new approaches to an old challenge."
  },
  moodStabilizers: {
    title: "The Journey",
    text: "John Cade's 1949 discovery of lithium's antimanic effects—observed in guinea pigs and confirmed in his own body—ranks among psychiatry's greatest breakthroughs. Yet this simple mineral was ignored for decades because it couldn't be patented. When lithium finally gained recognition, it transformed bipolar disorder from a sentence of institutionalization to a manageable condition. The search for alternatives led to anticonvulsants in the 1990s and atypical antipsychotics in the 2000s, though many argue nothing has surpassed lithium's efficacy and suicide prevention. Today's challenge: balancing rapid symptom control against long-term metabolic consequences, while rediscovering lithium's unique benefits."
  },
  diabetes: {
  title: "The Journey",
  text: "Diabetes treatment began with one of medicine's most dramatic moments: children dying in hospital wards awakening within hours of receiving the first insulin injections in 1922. From animal pancreas extracts to pills that make kidneys excrete sugar, diabetes medications trace humanity's evolving understanding of metabolism. Each breakthrough—from oral medications in the 1950s to weight-loss wonder drugs in the 2020s—has redefined what's possible, though the holy grail of a cure remains elusive."
  },
  anticoagulants: {
    title: "The Journey",
    text: "The anticoagulant story begins with mysterious cattle deaths from spoiled clover in the 1920s, leading to the discovery of warfarin—first marketed as rat poison before saving President Eisenhower's life and becoming medicine. For 60 years, patients endured warfarin's constant blood tests, food restrictions, and 'rat poison' stigma. Then, in 2010-2012, direct oral anticoagulants (DOACs) finally delivered the holy grail: safe, convenient pills requiring no monitoring. From bleeding cows to billion-dollar blockbusters, anticoagulants trace medicine's path from serendipitous disasters to designed molecular precision."
  },
  antivirals: {
    title: "The Journey",
    text: "For most of history, viral infections were untreatable death sentences—viruses hijack our own cells, making them nearly impossible to fight without destroying the host. Acyclovir (1982) proved antivirals were possible. The AIDS crisis forced unprecedented urgency: AZT offered hope but couldn't stop HIV alone. Then in 1996, combination therapy created the 'Lazarus effect'—the dying rose from their beds as HIV became manageable. Direct-acting antivirals cured Hepatitis C (2013). COVID mRNA vaccines (2020) were designed in 48 hours and approved in 11 months, shattering all records. From impossible dream to miracle cures, antivirals represent medicine's triumph over its most elusive enemy."
  }
};

// ============================================
// LEGEND / MECHANISM DATA
// ============================================

const legendData = {
  antidepressants: {
    title: "Mechanism Classes",
    icon: "⚕️",
    description: "Each antidepressant class works through distinct neurochemical pathways to alleviate depressive symptoms.",
    items: [
      {
        name: "MAOI",
        fullName: "Monoamine Oxidase Inhibitor",
        color: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
        classKey: "maoi",
        mechanism: "Inhibits monoamine oxidase enzymes, preventing the breakdown of neurotransmitters like serotonin, norepinephrine, and dopamine, thereby increasing their availability in the brain."
      },
      {
        name: "TCA",
        fullName: "Tricyclic Antidepressant",
        color: "linear-gradient(135deg, #feca57, #ff9f43)",
        classKey: "tca",
        mechanism: "Blocks reuptake of both serotonin and norepinephrine at neuronal synapses, increasing their concentration. Named for their three-ring chemical structure."
      },
      {
        name: "NDRI",
        fullName: "Norepinephrine-Dopamine Reuptake Inhibitor",
        color: "linear-gradient(135deg, #c44569, #a5325f)",
        classKey: "ndri",
        mechanism: "Selectively inhibits reuptake of norepinephrine and dopamine while leaving serotonin relatively unaffected, offering a unique profile with reduced sexual side effects."
      },
      {
        name: "SSRI",
        fullName: "Selective Serotonin Reuptake Inhibitor",
        color: "linear-gradient(135deg, #48dbfb, #0abde3)",
        classKey: "ssri",
        mechanism: "Specifically targets serotonin reuptake, increasing serotonin levels in synaptic clefts. Their selectivity results in fewer side effects compared to older antidepressants."
      },
      {
        name: "SNRI",
        fullName: "Serotonin-Norepinephrine Reuptake Inhibitor",
        color: "linear-gradient(135deg, #1dd1a1, #10ac84)",
        classKey: "snri",
        mechanism: "Blocks reuptake of both serotonin and norepinephrine, similar to TCAs but with improved side effect profile and better tolerability."
      },
      {
        name: "TeCA",
        fullName: "Tetracyclic Antidepressant",
        color: "linear-gradient(135deg, #ff9ff3, #ff6b9d)",
        classKey: "teca",
        mechanism: "Works through multiple mechanisms including alpha-2 adrenergic antagonism and histamine receptor blockade, enhancing norepinephrine and serotonin neurotransmission."
      },
      {
        name: "NMDA Antagonist",
        fullName: "NMDA Receptor Antagonist",
        color: "linear-gradient(135deg, #5f27cd, #341f97)",
        classKey: "nmda",
        mechanism: "Blocks NMDA receptors in the brain, increasing glutamate activity and promoting rapid neuroplasticity. Represents a fundamentally different mechanism from monoamine-based treatments."
      }
    ]
  },
  antibiotics: {
    title: "Mechanism of Action",
    icon: "🦠",
    description: "Antibiotics combat bacteria through diverse mechanisms, targeting essential cellular processes. Understanding these mechanisms reveals both their power and the challenge of resistance.",
    items: [
      {
        name: "Cell Wall Inhibitors",
        fullName: "Cell Wall Synthesis Inhibitors",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "cell-wall",
        mechanism: "Prevent bacteria from building their protective cell walls, causing them to burst from internal pressure. Includes penicillins, cephalosporins, and vancomycin. Most selective for bacteria since human cells lack cell walls."
      },
      {
        name: "Protein Synthesis Inhibitors",
        fullName: "Protein Synthesis Inhibitors",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "protein",
        mechanism: "Block bacterial ribosomes from making essential proteins. Includes aminoglycosides, chloramphenicol, and linezolid. Target the differences between bacterial and human ribosomes."
      },
      {
        name: "DNA/RNA Inhibitors",
        fullName: "DNA/RNA Synthesis Inhibitors",
        color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        classKey: "dna-rna",
        mechanism: "Interfere with bacterial DNA replication and repair, preventing cell division. Fluoroquinolones like ciprofloxacin target bacterial DNA gyrase, an enzyme essential for DNA unwinding."
      },
      {
        name: "Membrane Disruptors",
        fullName: "Cell Membrane Disruptors",
        color: "linear-gradient(135deg, #1abc9c, #16a085)",
        classKey: "membrane",
        mechanism: "Disrupt the bacterial cell membrane, causing contents to leak out. Daptomycin inserts into membranes and creates pores. Highly effective but more toxic due to similarities with human membranes."
      },
      {
        name: "Metabolic Inhibitors",
        fullName: "Metabolic Pathway Inhibitors",
        color: "linear-gradient(135deg, #f39c12, #e67e22)",
        classKey: "metabolic",
        mechanism: "Block essential metabolic pathways bacteria need to survive. Sulfonamides mimic a molecule bacteria need to make folic acid, a vitamin critical for DNA synthesis."
      }
    ]
  },
   antipsychotics: {
    title: "Mechanism Classes",
    icon: "🧠",
    description: "Antipsychotics work primarily by modulating dopamine neurotransmission, with newer generations affecting multiple neurotransmitter systems. Their classification reflects evolving understanding of psychosis and attempts to balance efficacy with tolerability.",
    items: [
      {
        name: "First Generation (Typical)",
        fullName: "First-Generation / Typical Antipsychotics",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "typical-mechanism",
        mechanism: "Strongly block dopamine D2 receptors throughout the brain. Effective for positive symptoms (hallucinations, delusions) but cause severe movement disorders due to non-selective dopamine blockade. Include chlorpromazine and haloperidol."
      },
      {
        name: "Second Generation (Atypical)",
        fullName: "Second-Generation / Atypical Antipsychotics",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "atypical-mechanism",
        mechanism: "Block both dopamine D2 and serotonin 5-HT2A receptors with looser D2 binding. Fewer movement side effects but metabolic problems (weight gain, diabetes). Better for negative symptoms. Include risperidone, olanzapine, quetiapine."
      },
      {
        name: "Third Generation (Dopamine Stabilizers)",
        fullName: "Third-Generation / Dopamine Partial Agonists",
        color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        classKey: "third-gen-mechanism",
        mechanism: "Partial dopamine agonists that stabilize dopamine activity - reduce it when too high, increase when too low. Lower metabolic side effects than second-generation. Include aripiprazole and cariprazine."
      },
      {
        name: "Clozapine (Unique)",
        fullName: "Clozapine - Multi-Receptor Antagonist",
        color: "linear-gradient(135deg, #f39c12, #e67e22)",
        classKey: "clozapine-mechanism",
        mechanism: "Acts on multiple receptor systems (dopamine, serotonin, histamine, cholinergic) with weak D2 binding. Most effective antipsychotic, especially for treatment-resistant cases, but requires blood monitoring due to agranulocytosis risk."
      },
      {
        name: "Movement Side Effects",
        fullName: "Extrapyramidal Symptoms (EPS)",
        color: "linear-gradient(135deg, #e67e22, #d35400)",
        classKey: "eps-info",
        mechanism: "Movement disorders caused by dopamine D2 blockade in basal ganglia (motor control region). Range from tremor and rigidity to tardive dyskinesia (permanent involuntary movements). Risk decreases from first → second → third generation drugs."
      }
    ]
  },
  opioids: {
    title: "Receptor Mechanisms",
    icon: "🧬",
    description: "Opioids bind to specific receptors in the nervous system, primarily μ (mu), δ (delta), and κ (kappa) receptors. Their effects depend on receptor type, binding strength, and whether they activate (agonist) or block (antagonist) these receptors.",
    items: [
      {
        name: "Full μ-Agonists",
        fullName: "Full Mu Opioid Receptor Agonists",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "full-agonist",
        mechanism: "Completely activate μ-opioid receptors, producing maximum pain relief, euphoria, and respiratory depression. Include morphine, fentanyl, heroin, and oxycodone. Highest addiction and overdose risk but most effective for severe pain."
      },
      {
        name: "Partial Agonists",
        fullName: "Partial Mu Opioid Receptor Agonists",
        color: "linear-gradient(135deg, #f39c12, #e67e22)",
        classKey: "partial-agonist-mech",
        mechanism: "Partially activate μ-opioid receptors with a 'ceiling effect' - increasing dose beyond a point produces no additional effect. Buprenorphine is the key example. Safer than full agonists with lower overdose risk, making it ideal for addiction treatment."
      },
      {
        name: "Natural Opioids",
        fullName: "Natural Opium Alkaloids",
        color: "linear-gradient(135deg, #27ae60, #229954)",
        classKey: "natural-mech",
        mechanism: "Compounds directly extracted from opium poppy (Papaver somniferum) without chemical modification. Morphine and codeine are the primary examples. These established the foundation for all opioid pharmacology."
      },
      {
        name: "Synthetic Opioids",
        fullName: "Fully Synthetic Opioid Compounds",
        color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        classKey: "synthetic-mech",
        mechanism: "Completely laboratory-synthesized compounds that mimic natural opioids but don't require poppy cultivation. Include fentanyl, methadone, and meperidine. Can be designed for specific properties like duration or potency."
      },
      {
        name: "Antagonists",
        fullName: "Opioid Receptor Antagonists",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "antagonist-mech",
        mechanism: "Block opioid receptors without activating them, displacing other opioids and rapidly reversing their effects. Naloxone (Narcan) is the critical example, used to reverse overdoses by restoring breathing within minutes."
      },
      {
        name: "Atypical Opioids",
        fullName: "Atypical Dual-Mechanism Opioids",
        color: "linear-gradient(135deg, #1abc9c, #16a085)",
        classKey: "atypical-mech",
        mechanism: "Combine weak opioid receptor activation with other mechanisms like serotonin/norepinephrine reuptake inhibition. Tramadol is the main example. Initially thought safer, but still carries addiction and side effect risks."
      }
    ]
  },
  anxiolytics: {
    title: "Mechanism Classes",
    icon: "🧠",
    description: "Anxiolytics reduce anxiety through diverse mechanisms, from enhancing the brain's natural calming system (GABA) to modulating serotonin signaling. The challenge lies in achieving rapid anxiety relief without creating dependence—a balance that remains elusive.",
    items: [
      {
        name: "Barbiturates",
        fullName: "Barbiturate GABA Modulators",
        color: "linear-gradient(135deg, #8e44ad, #6c3483)",
        classKey: "barb-mechanism",
        mechanism: "Directly activate GABA-A receptors and prolong their opening, strongly enhancing inhibitory neurotransmission. Much more dangerous than benzodiazepines—easy to fatally overdose by suppressing breathing. Largely obsolete for anxiety treatment."
      },
      {
        name: "Benzodiazepines",
        fullName: "Benzodiazepine GABA Enhancers",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "benzo-mechanism",
        mechanism: "Bind to benzodiazepine site on GABA-A receptors, making GABA more effective (positive allosteric modulators). Don't activate receptors directly, making them safer than barbiturates. Work within minutes but cause tolerance, dependence, and difficult withdrawal."
      },
      {
        name: "Azapirones",
        fullName: "Serotonin Partial Agonists",
        color: "linear-gradient(135deg, #1abc9c, #16a085)",
        classKey: "azap-mechanism",
        mechanism: "Partial agonists at 5-HT1A serotonin receptors, reducing serotonin activity in anxiety circuits while also affecting dopamine. Non-addictive and no withdrawal, but takes 2-4 weeks to work and many find it less effective than benzodiazepines."
      },
      {
        name: "Antihistamines",
        fullName: "H1 Histamine Receptor Antagonists",
        color: "linear-gradient(135deg, #27ae60, #229954)",
        classKey: "antihist-mechanism",
        mechanism: "Block histamine H1 receptors in the brain, producing sedation and mild anxiolytic effects. Also have anticholinergic properties. Non-addictive but less potent than benzodiazepines; useful for mild anxiety or as benzo alternative."
      },
      {
        name: "Gabapentinoids",
        fullName: "Voltage-Gated Calcium Channel Blockers",
        color: "linear-gradient(135deg, #e67e22, #d35400)",
        classKey: "gabap-mechanism",
        mechanism: "Bind to α2δ subunit of voltage-gated calcium channels, reducing release of excitatory neurotransmitters. Structurally similar to GABA but doesn't act on GABA receptors. Growing recognition of abuse potential despite initial belief they were safe."
      },
      {
        name: "The Benzo Paradox",
        fullName: "Why Benzos Remain Dominant Despite Risks",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "paradox-info",
        mechanism: "Benzodiazepines work within 15-30 minutes and are remarkably effective for acute anxiety and panic. No other drug class matches this rapid, reliable relief. This makes them irreplaceable for many patients despite addiction risks, creating an ongoing medical dilemma."
      }
    ]
  },
  stimulants: {
    title: "Mechanism Classes",
    icon: "⚡",
    description: "Stimulants increase dopamine and norepinephrine in the prefrontal cortex, enhancing focus and executive function. Different mechanisms and formulations balance efficacy, duration, and abuse potential.",
    items: [
      {
        name: "Amphetamines",
        fullName: "Amphetamine Dopamine Releasers",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "amp-mechanism",
        mechanism: "Enter dopamine neurons and reverse the dopamine transporter, actively pumping dopamine OUT into the synapse. Also trigger vesicular dopamine release. Create massive, rapid dopamine increases. Most potent stimulants but highest abuse potential. Include Adderall, Dexedrine, Vyvanse."
      },
      {
        name: "Methylphenidate",
        fullName: "Dopamine Reuptake Inhibitors",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "mph-mechanism",
        mechanism: "Block dopamine transporter preventing reuptake, but don't trigger dopamine release. More subtle mechanism than amphetamines. Still highly effective for ADHD with slightly lower (though still significant) abuse potential. Include Ritalin and Concerta."
      },
      {
        name: "Prodrug Designs",
        fullName: "Abuse-Deterrent Prodrugs",
        color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        classKey: "prodrug-mechanism",
        mechanism: "Inactive until body metabolically converts them to active drug. Vyvanse binds amphetamine to lysine; red blood cells must cleave the bond. Prevents rapid onset from snorting/injecting. Provides smoother, longer-lasting effects but can still be abused orally."
      },
      {
        name: "Wakefulness Promoters",
        fullName: "Eugeroics (Wakefulness Agents)",
        color: "linear-gradient(135deg, #f39c12, #e67e22)",
        classKey: "eugeroic-mechanism",
        mechanism: "Mechanism not fully understood. Modafinil increases dopamine, histamine, and orexin. Promotes wakefulness without classic stimulant effects. Less euphoric than amphetamines, making it somewhat less prone to abuse. Used for narcolepsy and shift work disorder."
      },
      {
        name: "Non-Stimulants",
        fullName: "Non-Stimulant ADHD Medications",
        color: "linear-gradient(135deg, #1abc9c, #16a085)",
        classKey: "nonstim-mechanism",
        mechanism: "Don't directly increase dopamine. Atomoxetine blocks norepinephrine reuptake (SNRI). Guanfacine is alpha-2 agonist enhancing prefrontal cortex signaling. No abuse potential but take weeks to work and often less effective than stimulants. Better for patients with substance abuse history."
      },
      {
        name: "The Stimulant Paradox",
        fullName: "Why Stimulants Calm ADHD",
        color: "linear-gradient(135deg, #27ae60, #229954)",
        classKey: "paradox-stim",
        mechanism: "ADHD brains have underactive prefrontal cortex and low dopamine signaling. Stimulants 'wake up' the PFC by increasing dopamine/norepinephrine, enabling focus and impulse control. Appears calming because the brain finally has the neurochemistry to self-regulate. In non-ADHD brains with normal dopamine, stimulants cause classic 'high' and hyperactivity."
      }
    ]
  },
  moodStabilizers: {
    title: "Mechanism Classes",
    icon: "⚖️",
    description: "Mood stabilizers prevent both manic and depressive episodes through diverse mechanisms—from lithium's mysterious intracellular effects to anticonvulsants' membrane stabilization to antipsychotics' dopamine modulation. The challenge: finding medications that stabilize both poles without causing their own harm.",
    items: [
      {
        name: "Lithium",
        fullName: "Lithium - The Original Mood Stabilizer",
        color: "linear-gradient(135deg, #3498db, #2980b9)",
        classKey: "lithium-mechanism",
        mechanism: "Mechanism still not fully understood after 75 years. Alters intracellular signaling (affects inositol, GSK-3β enzyme), modulates circadian rhythms, affects mitochondrial function, and is neuroprotective. Prevents both mania and depression. Best evidence for suicide prevention. Narrow therapeutic window requires blood monitoring."
      },
      {
        name: "Anticonvulsants",
        fullName: "Anticonvulsant Mood Stabilizers",
        color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        classKey: "anticonvulsant-mood",
        mechanism: "Stabilize neuronal membranes by blocking sodium/calcium channels and enhancing GABA inhibition. Originally developed for epilepsy, discovered to prevent mood cycling. Valproate best for acute mania, carbamazepine for rapid cycling, lamotrigine uniquely treats bipolar depression. Mechanism explains mood stability through reduced neuronal excitability."
      },
      {
        name: "Atypical Antipsychotics",
        fullName: "Atypical Antipsychotics as Mood Stabilizers",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)",
        classKey: "antipsychotic-mood",
        mechanism: "Block dopamine D2 and serotonin 5-HT2A receptors. Dopamine blockade treats manic symptoms (overactivity, impulsivity, psychosis). Some also treat bipolar depression through mechanisms not fully understood. Work faster than lithium (days vs weeks) making them preferred for acute mania, but significant metabolic side effects."
      },
      {
        name: "Combination Therapy",
        fullName: "Combination Approaches",
        color: "linear-gradient(135deg, #f39c12, #e67e22)",
        classKey: "combination-mood",
        mechanism: "Symbyax combines olanzapine (prevents mania switch) with fluoxetine (treats depression). Validates careful antidepressant use in bipolar when paired with antimanic agent. Many patients require multiple medications—mood stabilizer plus antipsychotic is common. Balances efficacy against polypharmacy risks."
      },
      {
        name: "The Two-Pole Challenge",
        fullName: "Why Bipolar is Hard to Treat",
        color: "linear-gradient(135deg, #1abc9c, #16a085)",
        classKey: "bipolar-challenge",
        mechanism: "Most medications treat mania OR depression, not both. Antidepressants risk triggering mania ('switching'). Antimanic agents may worsen depression. Few drugs (lithium, quetiapine, lamotrigine, cariprazine) address both poles. Treatment often requires combination therapy, complicating side effect management and adherence."
      },
      {
        name: "The Lithium Paradox",
        fullName: "Why Lithium Remains Unmatched",
        color: "linear-gradient(135deg, #27ae60, #229954)",
        classKey: "lithium-paradox",
        mechanism: "Despite 75+ years since discovery, lithium remains most effective mood stabilizer with best suicide prevention data. Yet prescribing has declined as doctors favor atypical antipsychotics (no blood tests needed). This shift trades lithium's inconvenience for atypicals' metabolic disasters (obesity, diabetes). Many consider this a concerning trend away from evidence-based practice."
      }
    ]
  },
  diabetes: {
  title: "Mechanism Classes",
  icon: "🔬",
  description: "Diabetes medications work through remarkably diverse mechanisms—from replacing missing insulin to blocking kidney glucose reabsorption to mimicking lizard venom. Modern therapy often combines multiple mechanisms.",
  items: [
    {
      name: "Insulin",
      fullName: "Exogenous Insulin Replacement",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)",
      classKey: "insulin-mechanism",
      mechanism: "Replaces or supplements the body's own insulin hormone. Allows glucose to enter cells from bloodstream. Essential for type 1 diabetes where pancreas produces no insulin. Type 2 diabetes may eventually require insulin when other mechanisms fail. Modern analogs engineered for faster/slower action."
    },
    {
      name: "Biguanides",
      fullName: "Hepatic Glucose Production Inhibitors",
      color: "linear-gradient(135deg, #3498db, #2980b9)",
      classKey: "biguanide-mechanism",
      mechanism: "Primarily reduce glucose production by the liver (gluconeogenesis). Also improve insulin sensitivity in muscle and fat tissue. Work through activation of AMP-activated protein kinase (AMPK), a cellular energy sensor. Do not cause hypoglycemia alone because they don't increase insulin."
    },
    {
      name: "Sulfonylureas",
      fullName: "Insulin Secretagogues",
      color: "linear-gradient(135deg, #f39c12, #e67e22)",
      classKey: "sulfonylurea-mechanism",
      mechanism: "Bind to ATP-sensitive potassium channels on pancreatic beta cells, causing them to close. This depolarizes the cell membrane, triggering insulin release. Work regardless of blood glucose level, causing hypoglycemia risk. Require functioning pancreatic beta cells to work."
    },
    {
      name: "Thiazolidinediones",
      fullName: "Insulin Sensitizers",
      color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
      classKey: "tzd-mechanism",
      mechanism: "Activate PPAR-gamma nuclear receptors in fat and muscle tissue, improving insulin sensitivity. Reduce insulin resistance by altering fat distribution and adipokine secretion. Help glucose enter cells more efficiently. Take weeks to reach full effect as they change gene expression."
    },
    {
      name: "GLP-1 Agonists",
      fullName: "Incretin Mimetics",
      color: "linear-gradient(135deg, #1abc9c, #16a085)",
      classKey: "glp1-mechanism",
      mechanism: "Mimic GLP-1 (glucagon-like peptide-1), a gut hormone released after eating. Increase glucose-dependent insulin secretion (only when blood sugar is high), suppress glucagon, slow gastric emptying, and reduce appetite. Significant weight loss effect. Cardioprotective benefits beyond glucose control."
    },
    {
      name: "DPP-4 Inhibitors",
      fullName: "Incretin Enhancers",
      color: "linear-gradient(135deg, #95a5a6, #7f8c8d)",
      classKey: "dpp4-mechanism",
      mechanism: "Block dipeptidyl peptidase-4 (DPP-4), the enzyme that rapidly breaks down incretin hormones like GLP-1 and GIP. This prolongs the action of naturally released incretins after meals. More modest glucose-lowering than GLP-1 agonists but oral and well-tolerated."
    },
    {
      name: "SGLT2 Inhibitors",
      fullName: "Renal Glucose Reabsorption Inhibitors",
      color: "linear-gradient(135deg, #e67e22, #d35400)",
      classKey: "sglt2-mechanism",
      mechanism: "Block sodium-glucose cotransporter-2 in kidney proximal tubules, preventing glucose reabsorption. Causes glucose excretion in urine (glycosuria). Insulin-independent mechanism. Unexpected benefits: cardiovascular protection, heart failure improvement, chronic kidney disease slowing. Causes osmotic diuresis."
    },
    {
      name: "Alpha-Glucosidase Inhibitors",
      fullName: "Carbohydrate Absorption Blockers",
      color: "linear-gradient(135deg, #27ae60, #229954)",
      classKey: "agi-mechanism",
      mechanism: "Inhibit intestinal enzymes (alpha-glucosidase) that break down complex carbohydrates into absorbable simple sugars. Slows carbohydrate digestion and absorption, blunting post-meal glucose spikes. Must be taken with meals. Undigested carbs reach colon causing gas and diarrhea."
    }
  ]
},
anticoagulants: {
  title: "Mechanism Classes",
  icon: "🩸",
  description: "Blood clots form through complex cascades involving platelets and clotting factors. Anticoagulants and antiplatelets target different steps in this process—some block platelet aggregation, others inhibit specific clotting factors, creating a diverse pharmacological toolkit.",
  items: [
    {
      name: "Heparins",
      fullName: "Indirect Thrombin/Factor Xa Inhibitors",
      color: "linear-gradient(135deg, #3498db, #2980b9)",
      classKey: "heparin-mechanism",
      mechanism: "Bind to antithrombin III (a natural anticoagulant), dramatically accelerating its ability to inactivate thrombin (Factor IIa) and Factor Xa by 1000-fold. Work indirectly by enhancing the body's own clotting inhibitor. Unfractionated heparin (UFH) and low molecular weight heparins (LMWH) differ in size and specificity."
    },
    {
      name: "Vitamin K Antagonists",
      fullName: "Vitamin K Epoxide Reductase Inhibitors",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)",
      classKey: "vka-mechanism",
      mechanism: "Block vitamin K epoxide reductase (VKORC1), preventing regeneration of active vitamin K. This depletes vitamin K, which is essential for producing functional clotting factors II, VII, IX, and X in the liver. Takes days to work because existing clotting factors must be cleared first. Warfarin is the prototype."
    },
    {
      name: "Antiplatelet Agents",
      fullName: "Platelet Aggregation Inhibitors",
      color: "linear-gradient(135deg, #f39c12, #e67e22)",
      classKey: "antiplatelet-mechanism",
      mechanism: "Prevent platelets from clumping together to form arterial clots. Multiple mechanisms: aspirin irreversibly blocks COX-1 (stopping thromboxane A2 production), P2Y12 inhibitors (clopidogrel, ticagrelor) block ADP receptors. Primarily prevent arterial thrombosis (heart attacks, strokes) rather than venous clots."
    },
    {
      name: "Direct Thrombin Inhibitors",
      fullName: "Factor IIa (Thrombin) Direct Inhibitors",
      color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
      classKey: "dti-mechanism",
      mechanism: "Directly bind to and inhibit thrombin (Factor IIa), the final enzyme that converts fibrinogen to fibrin (the mesh of blood clots). Unlike heparins, work directly without needing antithrombin as a cofactor. Dabigatran (oral) is the main example; also IV agents like bivalirudin."
    },
    {
      name: "Direct Factor Xa Inhibitors",
      fullName: "Factor Xa Direct Inhibitors (DOACs)",
      color: "linear-gradient(135deg, #1abc9c, #16a085)",
      classKey: "fxa-mechanism",
      mechanism: "Directly bind to and inhibit Factor Xa, blocking the conversion of prothrombin to thrombin. Stop the clotting cascade one step earlier than thrombin inhibitors. Include rivaroxaban, apixaban, edoxaban. Advantages: oral, predictable dosing, no monitoring, fewer interactions than warfarin. The modern standard."
    },
    {
      name: "Reversal Agents",
      fullName: "Anticoagulant Antidotes",
      color: "linear-gradient(135deg, #e67e22, #d35400)",
      classKey: "reversal-mechanism",
      mechanism: "Rapidly neutralize anticoagulants during life-threatening bleeding or emergency surgery. Vitamin K reverses warfarin (slowly, over 12-24 hours). Protamine reverses heparin. Idarucizumab reverses dabigatran. Andexanet alfa reverses Factor Xa inhibitors by acting as a decoy binding site. Critical safety net for anticoagulation."
    },
    {
      name: "Arterial vs Venous Clots",
      fullName: "Why Different Drugs for Different Clots",
      color: "linear-gradient(135deg, #95a5a6, #7f8c8d)",
      classKey: "clot-types",
      mechanism: "Arterial clots (heart attacks, ischemic strokes) form in high-flow areas from ruptured atherosclerotic plaques—dominated by PLATELETS. Treated with antiplatelets (aspirin, clopidogrel). Venous clots (DVT, PE) form in low-flow areas from stasis and hypercoagulability—dominated by FIBRIN. Treated with anticoagulants (warfarin, DOACs). This explains why different drugs are used for different conditions!"
    }
  ]
},
antivirals: {
  title: "Mechanism Classes",
  icon: "🦠",
  description: "Viruses hijack cellular machinery to replicate, making them nearly impossible to target without harming the host. Antivirals exploit subtle differences in viral enzymes or block specific steps in the viral life cycle. Different virus families require completely different drugs.",
  items: [
    {
      name: "Nucleoside/Nucleotide Analogs",
      fullName: "DNA/RNA Synthesis Inhibitors",
      color: "linear-gradient(135deg, #3498db, #2980b9)",
      classKey: "nucleoside-analog",
      mechanism: "Mimic natural DNA/RNA building blocks but are 'defective'—when incorporated into viral genetic material, they terminate synthesis. Acyclovir (herpes), AZT and tenofovir (HIV), sofosbuvir (HCV) all work this way. Selectively activated by viral enzymes or viral polymerases, sparing most host cells."
    },
    {
      name: "Protease Inhibitors",
      fullName: "Viral Protease Enzyme Blockers",
      color: "linear-gradient(135deg, #9b59b6, #8e44ad)",
      classKey: "protease-mechanism",
      mechanism: "Block viral proteases—enzymes that cut long viral protein chains into functional pieces. Without protease, viruses produce immature, non-infectious particles. HIV protease inhibitors (saquinavir, ritonavir) revolutionized AIDS treatment. COVID protease inhibitors (Paxlovid) use same principle. Highly specific to viral enzymes."
    },
    {
      name: "Neuraminidase Inhibitors",
      fullName: "Viral Release Blockers",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)",
      classKey: "neuraminidase-mechanism",
      mechanism: "Specific to influenza virus. Block neuraminidase enzyme that cleaves sialic acid, which is needed for new viral particles to escape infected cells. Traps viruses inside cells, preventing spread to new cells. Oseltamivir (Tamiflu) and zanamivir work this way. Must be started within 48 hours of symptoms."
    },
    {
      name: "Polymerase Inhibitors",
      fullName: "Viral RNA/DNA Polymerase Blockers",
      color: "linear-gradient(135deg, #1abc9c, #16a085)",
      classKey: "polymerase-mechanism",
      mechanism: "Directly inhibit viral polymerases—enzymes that copy viral genetic material. Different from nucleoside analogs (which are incorporated as defective building blocks). Sofosbuvir blocks HCV NS5B polymerase. Non-nucleoside reverse transcriptase inhibitors (NNRTIs) like efavirenz block HIV reverse transcriptase differently than NRTIs."
    },
    {
      name: "Combination Therapy",
      fullName: "Multi-Drug Synergistic Approach",
      color: "linear-gradient(135deg, #f39c12, #e67e22)",
      classKey: "combination-mechanism",
      mechanism: "Using multiple antivirals simultaneously prevents resistance—virus must mutate to escape ALL drugs at once (nearly impossible). HAART for HIV combines 2-3 drugs attacking different viral enzymes. Modern single-tablet regimens contain 3 drugs. This principle transformed HIV from fatal to manageable and is used for HCV treatment."
    },
    {
      name: "mRNA Vaccines",
      fullName: "Synthetic mRNA Protein Instruction Platform",
      color: "linear-gradient(135deg, #e67e22, #d35400)",
      classKey: "mrna-mechanism",
      mechanism: "Not a traditional antiviral—teaches immune system to recognize virus BEFORE infection. Synthetic mRNA instructs cells to make viral spike protein, triggering immune response without actual virus. Lipid nanoparticles deliver mRNA into cells. Extremely fast to design (COVID vaccines designed in 48 hours). Platform can be rapidly adapted for new variants or viruses."
    },
    {
      name: "Why Viruses Are Hard to Treat",
      fullName: "The Antiviral Challenge",
      color: "linear-gradient(135deg, #95a5a6, #7f8c8d)",
      classKey: "viral-challenge",
      mechanism: "Viruses use HOST cell machinery to replicate—they're not alive independently. Must target viral-specific enzymes without harming host. Viruses mutate rapidly (especially RNA viruses like HIV, HCV, influenza, COVID). Each virus family needs different drugs—herpes drugs don't work for HIV, flu drugs don't work for COVID. This is why antivirals took decades to develop and why we still don't have broad-spectrum antivirals."
    }
  ]
}
};

// ============================================
// CONDITION INFORMATION
// ============================================

const conditionInfo = {
  antidepressants: {
    name: "Major Depressive Disorder (MDD)",
    icon: "🧠",
    description: "Depression is more than sadness—it's a persistent inability to experience pleasure or maintain normal mood. The brain's emotional regulation systems fail, causing profound changes in thinking, behavior, and physical health.",
    pathophysiology: "Involves reduced serotonin, norepinephrine, and dopamine signaling in mood-regulating circuits. Decreased neuroplasticity (BDNF), chronic stress-induced changes to the HPA axis, and inflammation contribute. Brain imaging shows reduced activity in prefrontal cortex and hippocampus, with hyperactive amygdala driving negative emotional processing.",
    prevalence: "Affects ~7% of US adults annually, with 20-25% lifetime risk. Twice as common in women. Average age of onset is mid-20s, though it can begin at any age."
  },

  antibiotics: {
    name: "Bacterial Infections",
    icon: "🦠",
    description: "Bacterial infections occur when pathogenic bacteria invade the body, multiply, and cause disease. Unlike viruses, bacteria are living single-celled organisms that can be killed by targeting their unique cellular structures and metabolic processes.",
    pathophysiology: "Bacteria cause disease through direct tissue damage, toxin production, and triggering inflammatory immune responses. They possess cell walls, ribosomes, and metabolic pathways distinct from human cells—these differences allow antibiotics to selectively target bacteria while sparing human tissue. Antibiotic resistance evolves when bacteria develop mutations or acquire resistance genes.",
    prevalence: "Bacterial infections remain among the leading causes of death globally, though antibiotic availability has dramatically reduced mortality. Antibiotic-resistant infections now kill ~1.3 million people annually worldwide, a growing crisis threatening modern medicine's foundations."
  },

  antipsychotics: {
    name: "Psychotic Disorders (Schizophrenia)",
    icon: "👁️",
    description: "Psychosis involves losing touch with reality through hallucinations (sensing things that aren't there) and delusions (fixed false beliefs). Schizophrenia is the prototypical psychotic disorder, characterized by positive symptoms (psychosis), negative symptoms (emotional flattening, social withdrawal), and cognitive deficits.",
    pathophysiology: "The dopamine hypothesis suggests excessive dopamine activity in mesolimbic pathways causes positive symptoms, while reduced dopamine in prefrontal cortex contributes to negative symptoms and cognitive issues. Glutamate dysfunction (NMDA receptor hypofunction) and neurodevelopmental abnormalities also play roles. Brain imaging shows enlarged ventricles, reduced gray matter in prefrontal and temporal regions.",
    prevalence: "Schizophrenia affects ~1% of the population worldwide. Onset typically occurs in late teens to early 30s, earlier in men. Psychotic symptoms also occur in bipolar disorder, severe depression, substance use, and other conditions."
  },

  opioids: {
    name: "Pain (Acute and Chronic)",
    icon: "⚡",
    description: "Pain is an unpleasant sensory and emotional experience signaling tissue damage or potential harm. Acute pain (injury, surgery) serves protective functions, while chronic pain persists beyond healing and becomes a disease itself. Pain involves both physical sensations and emotional suffering.",
    pathophysiology: "Pain signals travel from nerve endings through the spinal cord to the brain's thalamus and cortex. Tissue damage releases inflammatory chemicals activating nociceptors. The brain has endogenous opioid systems (endorphins, enkephalins) that naturally suppress pain. Chronic pain involves neuroplastic changes—'wind-up' in spinal cord and brain hypersensitivity—where pain circuits become overactive even without ongoing tissue damage.",
    prevalence: "Chronic pain affects ~20% of US adults (50+ million people). Leading cause of disability worldwide. The opioid crisis has killed over 500,000 Americans since 1999, demonstrating the tragic tension between pain relief and addiction risk."
  },

  anxiolytics: {
    name: "Anxiety Disorders",
    icon: "😰",
    description: "Anxiety disorders involve excessive, persistent fear and worry that interferes with daily functioning. Unlike normal stress responses, pathological anxiety occurs without real threat or persists long after danger passes. Includes generalized anxiety disorder (GAD), panic disorder, social anxiety, and phobias.",
    pathophysiology: "The brain's fear circuit becomes hyperactive—amygdala overreacts to perceived threats while prefrontal cortex fails to inhibit these false alarms. Low GABA (brain's 'brake' neurotransmitter) and high glutamate (excitatory) create neuronal hyperexcitability. Dysregulated norepinephrine and serotonin, along with heightened stress hormone (cortisol) responses, maintain chronic anxiety states.",
    prevalence: "Most common mental health condition: ~30% lifetime prevalence. Affects 18% of US adults annually. Twice as common in women. Often co-occurs with depression. Panic disorder affects 2-3% of adults; social anxiety disorder 7%."
  },

  stimulants: {
    name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    icon: "🎯",
    description: "ADHD is a neurodevelopmental disorder characterized by persistent inattention, hyperactivity, and impulsivity that impairs functioning. It's not just 'being hyper'—it's a fundamental difference in brain executive function, self-regulation, and reward processing. Three subtypes exist: predominantly inattentive, hyperactive-impulsive, or combined.",
    pathophysiology: "ADHD involves underactive prefrontal cortex (executive function center) and deficient dopamine/norepinephrine signaling in attention and reward circuits. The brain constantly seeks stimulation because baseline arousal is too low. Structural imaging shows smaller prefrontal cortex, basal ganglia, and cerebellum. The default mode network (brain's 'idle' state) fails to quiet during tasks, causing internal distraction.",
    prevalence: "Affects 8-10% of children and 4-5% of adults. More commonly diagnosed in boys (2:1 ratio) though girls often underdiagnosed due to presenting with inattentive rather than hyperactive symptoms. 60% of childhood cases persist into adulthood."
  },

  moodStabilizers: {
    name: "Bipolar Disorder",
    icon: "⚖️",
    description: "Bipolar disorder involves cycling between extreme mood states—manic episodes (elevated mood, decreased sleep, impulsivity, racing thoughts) and depressive episodes (low mood, fatigue, hopelessness). Unlike normal mood fluctuations, these episodes are severe, prolonged, and interfere profoundly with functioning. Bipolar I involves full mania; Bipolar II involves milder hypomania with severe depression.",
    pathophysiology: "Involves dysregulated neurotransmitter cycling (dopamine, serotonin, norepinephrine swing between extremes), circadian rhythm disruption (sleep-wake cycle dysfunction triggers episodes), mitochondrial energy metabolism problems, and ion channel abnormalities. The 'kindling hypothesis' suggests episodes become more frequent over time as neural pathways strengthen, like epileptic seizures. Neuroplasticity is impaired, with gray matter loss in prefrontal regions.",
    prevalence: "Affects ~2.8% of US adults (Bipolar I and II combined). Onset typically in late teens to early 20s. Equal prevalence between sexes, though women experience more depressive episodes. High suicide risk—20-30x general population. Strong genetic component (~80% heritability)."
  },

  diabetes: {
  name: "Diabetes Mellitus (Type 1 & Type 2)",
  icon: "🩸",
  description: "Diabetes is a metabolic disorder where the body cannot properly regulate blood glucose levels. Type 1 diabetes (5-10% of cases) is an autoimmune destruction of insulin-producing pancreatic beta cells, requiring lifelong insulin. Type 2 diabetes (90-95%) involves insulin resistance where cells don't respond properly to insulin, plus progressive beta cell dysfunction.",
  pathophysiology: "In type 1, autoimmune destruction eliminates insulin production entirely—no insulin means glucose cannot enter cells and accumulates in blood to dangerous levels. Type 2 is more complex: peripheral tissues (muscle, fat, liver) become resistant to insulin's signals (insulin resistance), forcing the pancreas to produce more insulin (hyperinsulinemia). Eventually beta cells become exhausted and fail, requiring exogenous insulin. Chronic hyperglycemia causes micro- and macrovascular damage through multiple mechanisms: glycation of proteins (forming AGEs), oxidative stress, inflammation, and metabolic dysfunction affecting every organ system.",
  prevalence: "Diabetes affects 537 million adults worldwide (10.5% of population), projected to reach 783 million by 2045. In the US: 37 million people (11.3%). Type 2 accounts for 90-95% of cases. Leading cause of blindness, kidney failure, and lower limb amputations. Diabetes prevalence has quadrupled since 1980, driven by obesity and aging populations. 96 million US adults have prediabetes."
  },

  anticoagulants: {
    name: "Thrombosis & Thromboembolic Disorders",
    icon: "🩸",
    description: "Thrombosis is pathological blood clot formation inside blood vessels, blocking blood flow and causing tissue damage. When clots break off and travel (embolize), they can lodge in critical organs causing strokes, pulmonary embolism, or heart attacks. Blood clots are the body's normal healing response gone wrong—protective clotting becomes life-threatening obstruction.",
    pathophysiology: "Clot formation follows Virchow's Triad: (1) endothelial injury (vessel damage), (2) abnormal blood flow (stasis or turbulence), and (3) hypercoagulability (blood too prone to clotting). ARTERIAL clots form in high-pressure, high-flow areas (arteries) from ruptured atherosclerotic plaques, are platelet-rich 'white clots,' and cause heart attacks and ischemic strokes. VENOUS clots form in low-pressure, low-flow areas (veins) from stasis and hypercoagulability, are fibrin-rich 'red clots,' and cause deep vein thrombosis (DVT) and pulmonary embolism (PE). The coagulation cascade involves 13+ factors in a complex amplification system converting fibrinogen to fibrin mesh. Atrial fibrillation causes blood to pool in heart chambers, forming clots that embolize to brain (stroke). Mechanical heart valves create turbulent flow requiring lifelong anticoagulation.",
    prevalence: "Venous thromboembolism (DVT/PE) affects 300,000-600,000 Americans annually, killing 100,000-300,000. Atrial fibrillation affects 6+ million Americans, causing 130,000+ strokes/year; risk increases with age (9% of people over 65). Coronary artery disease (heart attacks) kills 370,000+ Americans annually. Stroke kills 150,000+ annually. Post-surgical thrombosis remains a leading preventable cause of hospital death. Anticoagulants and antiplatelets prevent millions of clot-related deaths yearly but cause ~50,000 major bleeding events annually—constant balancing act."
  },

  antivirals: {
  name: "Viral Infections",
  icon: "🦠",
  description: "Viruses are not technically alive—they're genetic material (DNA or RNA) wrapped in protein that hijacks living cells to reproduce. Unlike bacteria, viruses use the host cell's own machinery, making them extraordinarily difficult to target without harming the host. Viral infections range from nuisance (common cold) to acute deadly (Ebola) to chronic destructive (HIV, Hepatitis C).",
  pathophysiology: "Viral replication cycle: (1) Attachment—virus binds to specific cell surface receptors, (2) Entry—viral genetic material enters cell, (3) Uncoating—viral genome released, (4) Replication—viral polymerases copy genetic material using host cell's resources, (5) Assembly—new viral proteins and genomes combine, (6) Release—new viruses exit to infect more cells. Different antivirals target different steps. RNA viruses (HIV, HCV, influenza, COVID) mutate rapidly due to error-prone polymerases, enabling drug resistance and immune escape. DNA viruses (herpes, smallpox) are more stable. Retroviruses (HIV) reverse-transcribe RNA into DNA that integrates into host genome—nearly impossible to eliminate. Chronic viral infections (HIV, HCV, herpes) establish persistent or latent infections, requiring long-term or lifelong treatment.",
  prevalence: "HIV: 39 million people living with HIV globally; 630,000 AIDS deaths annually (down from 2+ million at peak). Hepatitis C: 58 million chronic infections worldwide; leading cause of liver transplants before DAAs. Influenza: 3-5 million severe cases annually, 290,000-650,000 deaths. COVID-19: 775+ million confirmed cases, 7+ million deaths (2020-2024); actual numbers likely much higher. Herpes simplex: 67% of global population under 50 has HSV-1 (oral herpes); 13% have HSV-2 (genital herpes). Despite antiviral advances, viral infections remain leading causes of death worldwide, especially in resource-limited settings."
}
};

// Optional: Helper function to get all drug classes
function getAllClasses() {
  return Object.keys(drugClasses);
}