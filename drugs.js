const drugClasses = {
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
  ]
};

// Optional: Helper function to get all drug classes (useful when you add more classes later)
function getAllClasses() {
  return Object.keys(drugClasses);
}

// Journey text for each drug class
const journeyTexts = {
  antidepressants: {
    title: "The Journey",
    text: "The history of antidepressants began serendipitously in the 1950s when researchers noticed mood improvements in tuberculosis patients. From these accidental discoveries emerged entire classes of medications that would transform mental health treatment, evolving from broad-acting compounds to precisely targeted therapies."
  },
  antibiotics: {
    title: "The Journey",
    text: "The antibiotic era began with accidental discoveries and systematic research that transformed medicine. From Fleming's contaminated petri dish to targeted molecular designs, antibiotics have saved countless lives while sparking an evolutionary arms race with bacteria. This timeline traces humanity's ongoing battle against bacterial infections."
  }
};

// Legend/mechanism data for each drug class
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
  }
};