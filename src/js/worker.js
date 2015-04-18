var _ = require('underscore');
_.mixin(require('./underscore_mixins'));

var D = require('D');
var stateCities = require('./usa_state_cities');



var db = {"count": 20, "results": [{"incident_date": null, "city": "Lumberland", "searched_date": "2006-12-09", "victim_age": 42, "shots_fired": 5, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Lumberland Constables", "county": "Sullivan", "source_url": "http://www.recordonline.com/apps/pbcs.dll/article?AID=%2F20061212%2FNEWS%2F612120314", "victim_armed": "armed", "victim_name": "Lester Devens Jr.", "state": "NY", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Monticello \u2014 Town of Lumberland constables ordered Lester Devens Jr. to drop his knife and pepper-sprayed him twice, with no effect, before fatally shooting him. Devens, 42, was shot five times by Lumberland Constables John Cuomo and Victor Czubak Saturday night inside Devens' home on Van Tuyl Road", "officer_names": "John Cuomo, Victor Czubak"}, {"incident_date": null, "city": "San Antonio", "searched_date": "2013-12-06", "victim_age": 23, "shots_fired": 5, "weapon": "dwi, intoxicated, belligerent", "victim_race": "white", "agency": "UIW-PD (University of Incarnate Word PD)", "county": "Bexar", "source_url": "http://www.mysanantonio.com/news/local/article/UIW-Student-slain-by-campus-officer-was-5525223.php", "victim_armed": "unarmed", "victim_name": "Robert Cameron Redus", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "hit", "summary": "SAN ANTONIO \u2014 University of the Incarnate Word student Cameron Redus, a 23-year-old, was shot five times \u2014 including once in the back \u2014 during a fatal altercation with a campus police officer last year, according to an autopsy report released Thursday by the Bexar County Medical Examiner's office.  Authorities said the shooting came after a six-minute struggle in the parking lot of the Treehouse Apartments in Alamo Heights, where Redus lived.  A toxicology test also showed Redus had a blood alcohol content of .155, nearly twice the legal limit to drive, when authorities say he fought UIW officer Christopher Carter on Dec. 6 in the parking lot of Redus' off-campus apartment complex near Incarnate Word.  The Dec. 7 autopsy conducted by Dr. Elizabeth Peacock found that five bullets had struck Redus in the left eye, upper chest, left elbow, right hip and upper back. The report didn't say which wounds came first, but it concluded that the shot to the back was the \u201cmost immediately lethal.\u201d  At a past press conference, Alamo Heights Police Chief Richard Pruitt said Carter was driving on Broadway in a marked UIW police pickup truck when he spotted another truck being driven erratically. It was in the early morning hours of Dec. 6, and Carter saw the truck strike a curb and swerve briefly into the oncoming lanes.  Carter followed the suspected drunken driver. He was outside his jurisdiction, but Carter was a licensed peace officer authorized to arrest DWI suspects anywhere in Texas.  The officer followed Redus and activated the emergency lights of his police truck near the Treehouse Apartments, where Redus parked and got out of his vehicle.  The dash cam of Carter's truck didn't record video of the altercation, but Carter was wearing a microphone that recorded audio. Pruitt said the recording captured Carter asking Redus to stop and put his hands on the truck. Redus complied, but began to struggle when Carter started to handcuff him, Pruitt said.  During the six-minute confrontation, Carter told Redus 14 times to put his hands behind his back and told him three times that he was under arrest, Pruitt said. Carter told Redus to stop resisting 56 times, Pruitt said.  Redus at one point grabbed Carter's police baton and struck the officer with it, authorities said.  Carter regained control of the baton and Redus broke free. Pruitt said Carter drew his handgun, ordered Redus to stop, and Redus charged him with his hand raised. Carter fired six times.  \u2022 http://www.mysanantonio.com/news/local/article/UIW-Student-slain-by-campus-officer-was-5525223.php \u2022 http://www.mysanantonio.com/news/local/article/Autopsy-UIW-student-shot-in-the-back-5335693.php \u2022 http://www.expressnews.com/news/local/article/Witness-UIW-student-fought-officer-before-fatal-5077162.php#/0", "officer_names": "Cpl. Christopher Carter"}, {"incident_date": null, "city": "Centralia", "searched_date": "2014-06-29", "victim_age": 43, "shots_fired": 1, "weapon": "handgun", "victim_race": "unknown", "agency": "Centralia Police Department", "county": "Lewis", "source_url": "http://www.chronline.com/article_c8ff0b82-ffba-11e3-9841-001a4bcf887a.html", "victim_armed": "armed", "victim_name": "Unreleased", "state": "WA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "The officer was called to an incident at a convenience store regarding a stolen burrito, the suspect while being detained attempted to draw his weapon, the officer fired at least one round at the suspect, the suspect was dead at the scene.", "officer_names": "Ruben Ramirez"}, {"incident_date": null, "city": "Oak View", "searched_date": "2013-07-12", "victim_age": 42, "shots_fired": null, "weapon": "handgun", "victim_race": "white", "agency": "Ventura County Sheriff", "county": "Ventura", "source_url": "http://www.vcstar.com/news/authorities-identify-man-shot-to-death-by-in-oak", "victim_armed": "armed", "victim_name": "Daniel Cur\u00adTis Houfek", "state": "CA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Houfek pointed a handgun at deputies, they shot him and called emergency personnel, Houfek died at scene of gunshot wounds. As an aside, the Anti-Defamation League reported Houfek to be a \"promi\u00adnent local white suprema\u00adcist\" http://blog.adl.org/extremism/ventura-county-deputies-kill-white-supremacist-who-pointed-handgun", "officer_names": null}, {"incident_date": null, "city": "Fairview", "searched_date": "2012-01-29", "victim_age": 37, "shots_fired": 3, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Fairview Police Department", "county": "Multnomah", "source_url": "http://portlandtribune.com/component/content/article?id=19463", "victim_armed": "armed", "victim_name": "Larry Maurice Wesley Mckinney", "state": "OR", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police answered a DV call and said they saw McKinney w/a large kitchen knife pointed at the officer who answered the door. His partner, Mike Morton, shot McKinney 3 times. Per Multnomah county policy, the case went before a grand jury. McKinney's mother testified that he wasn't given time to follow their command to drop the knife. The officers were cleared of wrongdoing.", "officer_names": "Mike Mortion"}, {"incident_date": null, "city": "Fort Wayne", "searched_date": "2013-04-27", "victim_age": 19, "shots_fired": null, "weapon": "firearm; not stated", "victim_race": "black or african american", "agency": "Fort Wayne Police Department", "county": "Allen", "source_url": "http://news-sentinel.com/apps/pbcs.dll/article?AID=/20140818/NEWS/140819636", "victim_armed": "armed", "victim_name": "Tavontae Jamar Or \"Tj\" Haney", "state": "IN", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": null, "officer_names": "Cameron A. Norris And John D. Drummer"}, {"incident_date": null, "city": "Roanoke", "searched_date": "2007-12-27", "victim_age": null, "shots_fired": null, "weapon": "knife or cutting instrument", "victim_race": "white", "agency": "Roanoke Police Department", "county": "Roanoke", "source_url": "http://www.wsls.com/story/20870498/police-name-officer-involved-in-fatal-shooting", "victim_armed": "armed", "victim_name": "Sharif Al-Malik", "state": "VA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police say they were responding to a domestic dispute and shot victim when he was holding a knife to his girlfriend's throat. His girlfriend denied police accounts and said victim never held knife to her throat.", "officer_names": "Sgt. John Buzzo"}, {"incident_date": null, "city": "San Antonio", "searched_date": "2014-02-28", "victim_age": 23, "shots_fired": 3, "weapon": "handgun", "victim_race": "black or african american", "agency": "Off-Duty SAPD (San Antonio Police Department)", "county": "Bexar", "source_url": "http://www.mysanantonio.com/news/local/article/Man-jailed-in-incident-that-led-to-fatal-shooting-5290557.php", "victim_armed": "armed", "victim_name": "Marquise Jones", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "SAN ANTONIO \u2014 A driver in a crash that led to an officer-involved shooting last week at a drive through refused to turn off his car when ordered to and was arrested on outstanding municipal court warrants, according to a police report released Wednesday.  Fabian Garza, 21, was driving a 1994 Cadillac El Dorado that rear-ended a white SUV early Friday in the drive-through of Chacho's, in the 8600 block of Perrin Beitel Road on the Northeast Side.  Garza tried to back up and leave the scene of the 1 a.m. wreck, according to police. The SUV's driver, whose identity is unknown, \u201cexchanged words\u201d with the people in the Cadillac and left the scene, according to police.  A witness told Officer Robert Encina of the San Antonio Police Department about the incident and added . Encina was in full uniform working an off-duty security job at the restaurant, of the incident, adding that the people in the Cadillac seemed intoxicated.  The witness said the officer repeatedly asked Garza to turn off the car and step outside the car. Garza and his passenger Marquise Jones, 23, were not following Encina's orders and Jones seemed to be reaching for something in the car, the witness told police.  Encina was able to turn off the car himself, and put the keys on the roof while trying to handcuff Garza, according to police.  At that point, police said Jones got out of the passenger door and pulled a revolver from the area of his waist, turning to look at Encina.  The witness said Encina then fired shots.  Jones started to run westward before collapsing, according to the police report.  An arriving officer found Jones lying face down toward Perrin Beitel road with a gunshot wound on the left side of his back. He was not breathing and was pronounced dead within minutes, according to police.  \u2022 http://www.mysanantonio.com/news/local/article/Man-jailed-in-incident-that-led-to-fatal-shooting-5290557.php \u2022 http://www.expressnews.com/news/local/article/Lawsuit-Cop-targeted-minorities-in-incident-5405382.php \u2022 http://www.kens5.com/story/news/local/2014/06/27/10664486/ \u2022 http://www.kens5.com/story/news/local/2014/06/27/10664384/ \u2022 http://www.sanantonio.gov/Commpa/News/TabId/317/ArtMID/1970/ArticleID/1445/Councilwoman-Taylor-Releases-Statement-on-Chacho%E2%80%99s-Shooting-Incident.aspx", "officer_names": "Officer Robert Encina"}, {"incident_date": null, "city": "Elizabeth", "searched_date": "2014-06-29", "victim_age": 44, "shots_fired": 1, "weapon": "knife or cutting instrument", "victim_race": "unknown", "agency": "Elizabeth Police Department", "county": "Union", "source_url": "http://www.nj.com/union/index.ssf/2014/06/elizabeth_man_shot_by_police_was_threatening_woman_with_knife_authorities_say.html", "victim_armed": "armed", "victim_name": "John Omar Delvalle", "state": "NJ", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Officers were called to the scene of a domestic dispute where the suspect was holding a woman at knife point. In the altercation that followed the suspect was shot once, and was pronounced dead at the scene.", "officer_names": null}, {"incident_date": null, "city": "Harriman", "searched_date": "2014-08-19", "victim_age": 28, "shots_fired": 10, "weapon": "handgun", "victim_race": "white", "agency": "Harriman Police Dept", "county": "Roane", "source_url": "http://www.wbir.com/story/news/local/kingston-harriman-roane/2014/08/20/da-officers-justified-in-shooting-armed-burglary-suspect/14352317/", "victim_armed": "armed", "victim_name": "Miranda Guy", "state": "TN", "shootings": "yes", "victim_gender": "female", "outcome": "killed", "summary": "Harriman investigator Lt. Dan Schneider entered the house first and confronted Guy in the kitchen and her roommate, Melissa Grove, in the family room. Grove got down on the floor, and both the officer and Grove said that Guy pointed the gun at her own head and pulled the trigger. It clicked but didn't go off, and Lt. Schneider ordered her to drop the gun.  At that point, the release said that Roane County deputy Chris White came in the front door, and Guy pointed the gun in his direction, Both officers said they ordered Guy to drop the gun several times, but she instead began to walk towards Deputy White with the gun raised. That's when both officers fired their guns at Guy until she dropped to the floor and released the gun.", "officer_names": "Lt. Dan Schneider, Chris White "}, {"incident_date": null, "city": "Centralia", "searched_date": "2014-02-13", "victim_age": 48, "shots_fired": 1, "weapon": "knife or cutting instrument", "victim_race": "unknown", "agency": "Centralia Police Department", "county": "Lewis", "source_url": "http://www.chronline.com/article_b54aecd0-94b9-11e3-8b34-001a4bcf887a.html", "victim_armed": "armed", "victim_name": "Unreleased", "state": "WA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Police were called due to a report of a man hanging around outside of a closed business. One officer approached the suspect at which time he displayed a knife, when ordered to drop the knife, he ran and a second police office fired his weapon, discharging at least one round and killing the suspect.", "officer_names": "Phil Weismiller"}, {"incident_date": null, "city": "Santa Maria", "searched_date": "2012-08-02", "victim_age": 37, "shots_fired": 14, "weapon": "toy/fake/non-lethal gun", "victim_race": "hispanic or latino", "agency": "Santa Maria Police Department", "county": "Santa Barbara", "source_url": "http://www.lompocrecord.com/news/local/crime-and-courts/fatal-police-shooting-deemed-justified/article_faf2eda2-21bc-11e3-a73c-0019bb2963f4.html", "victim_armed": "armed", "victim_name": "Robert Padilla Reyes", "state": "CA", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Reyes led the police in a car chase which ended after his car was disabled with a spike strip on Highway 1. He brandished a realistic looking fake semi-automatic weapon and all three officers fired shots. 18 shots were fired, 5 hit Reyes. He had methamphetamines in his system as well as alcohol, and already had \"2 strikes\" in the California system. There is some speculation that he might have been considering suicide by cop. The killing was later deemed justified by the local DA.", "officer_names": null}, {"incident_date": null, "city": "Fort Wayne", "searched_date": "2013-02-20", "victim_age": 21, "shots_fired": null, "weapon": "firearm; not stated", "victim_race": "black or african american", "agency": "Fort Wayne Police Department", "county": "Allen", "source_url": "http://usgunviolence.wordpress.com/2013/02/20/killed-stephen-oneal-wattley-ii-fort-wayne-in/", "victim_armed": "armed", "victim_name": "Stephen O\u2019Neal Wattley Ii", "state": "IN", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "At 2:27 a.m. Wednesday, officers were called to an armed robbery at CVS Pharmacy, 2802 E. State Blvd., at Beacon Street.  Officers chased Wattley toward Baldwin Creek Apartments in the 1900 block of Hobson Road. As two officers approached Building F, they found Wattley standing in the stairwell area on the second floor, York said.  Wattley seemed unfamiliar with the apartment complex, York said, and didn\u2019t realize that the top of the stairway was blocked, trapping him at the top of the stairs.  \u201cHe ran up the stairway and discovered it was boarded off,\u201d York said. \u201cThe officers were at the bottom of the stairs\u2026 then Wattley turned around and pointed the weapon at the officers.\u201d  One of the two officers fired his weapon at Wattley, striking him multiple times, York said.", "officer_names": null}, {"incident_date": null, "city": "Oklahoma City", "searched_date": "2013-07-11", "victim_age": 24, "shots_fired": null, "weapon": "handgun", "victim_race": "black or african american", "agency": "Oklahoma City police", "county": null, "source_url": "http://www.news9.com/story/22829814/new-details-in-deadly-officer-involved-shooting-in-downtown-okc", "victim_armed": "armed", "victim_name": "Brian Simms Jr.", "state": "OK", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Uniformed, off-duty officers working security outside a concert venue, found Simms asleep or passed out in a car, with a gun in his waistband. They ordered him to put the gun away, he did not, he was shot and killed.", "officer_names": "Sgt. Paul Galyon"}, {"incident_date": null, "city": "Orlando", "searched_date": "2014-08-20", "victim_age": 22, "shots_fired": 9, "weapon": "unarmed", "victim_race": "unknown", "agency": "orlando police department", "county": "Orange", "source_url": "http://thesent.nl/1Ayap7l ", "victim_armed": "unarmed", "victim_name": "Maria Fernanda Godinez", "state": "FL", "shootings": "yes", "victim_gender": "female", "outcome": "killed", "summary": "Killed by officer stray bullet. A suspect carrying a unloaded gun got into a bar altercation. Police confronted him outside and fires were shot.", "officer_names": "Eduardo Sanguino"}, {"incident_date": null, "city": "Dallas", "searched_date": "2014-08-10", "victim_age": 26, "shots_fired": 5, "weapon": "unarmed", "victim_race": "white", "agency": "Dallas Police Dept", "county": null, "source_url": "http://www.nbcdfw.com/news/local/Man-Dies-In-Dallas-Officer-Involved-Shooting-270705511.html", "victim_armed": "unarmed", "victim_name": "Andrew Scott Gaynier", "state": "TX", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "\"We have a really bad problem in Dallas,\" Flanagan said. In response to complaints and lawsuits, Dallas Police Chief David Brown revised policy and training standards for use of force in January", "officer_names": "Antonio Hudson"}, {"incident_date": null, "city": "Cedar Falls", "searched_date": "2013-12-25", "victim_age": 27, "shots_fired": 2, "weapon": "handgun", "victim_race": "white", "agency": "Cedar Falls Police Department", "county": "Black Hawk", "source_url": "http://www.wrex.com/story/24300453/2013/12/25/officer-involved-shooting-in-cedar-falls-sends-two-to-hospital", "victim_armed": "unarmed", "victim_name": "Zach Church", "state": "IA", "shootings": "yes", "victim_gender": "male", "outcome": "hit", "summary": "The shooting happened near Second Street and Hudson Road in Cedar Falls around 3 a.m. Wednesday. Police Chief Jeff Olson says 27-year-old Zachary Church was sleeping in a parked car near the intersection, and the car was still running.  Police say an altercation happened after the investigating officer got Church out of the car, and discovered marijuana.  According to Chief Olson, Officer Bob Anderson was putting Church in his patrol car when Church fought back, hitting Anderson over the head.  Olson says during the altercation, both Anderson and Church were at one point on the ground.  Anderson fired his weapon twice, hitting Church.  Olson says other officers were arriving to the scene at the time the shots were fired.  Both were taken to the hospital. Police said Anderson was released after treatment of facial and head injuries, while Church remains in the hospital in stable condition.  Charges against Church are pending his release from medical treatment.  Officer Anderson was wearing a body camera when the incident happened, but he failed to have it on during this incident.", "officer_names": "Bob Anderson"}, {"incident_date": null, "city": "Reno", "searched_date": "2013-07-11", "victim_age": 27, "shots_fired": 22, "weapon": "shotgun", "victim_race": "black or african american", "agency": "Reno and Sparks police", "county": "Washoe", "source_url": "http://www.mynews4.com/mostpopular/story/D-A-finds-officer-involved-shooting-justified/ki13lGN6EEGUXc08uOC6Aw.cspx", "victim_armed": "armed", "victim_name": "Kenneth Jewel Stafford", "state": "NV", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "Stafford, reportedly suicidal and suffering PTSD, winds up in someone's backyard with a shotgun. 5 officers shoot 22 rounds, hitting him 14 times.", "officer_names": null}, {"incident_date": null, "city": "Saginaw", "searched_date": "2012-07-01", "victim_age": 49, "shots_fired": 46, "weapon": "knife or cutting instrument", "victim_race": "black or african american", "agency": "Saginaw Police", "county": "Saginaw", "source_url": "http://www.cnn.com/2012/09/21/justice/michigan-police-shooting/", "victim_armed": "armed", "victim_name": "Milton Hall", "state": "MI", "shootings": "yes", "victim_gender": "male", "outcome": "killed", "summary": "\"Hall was armed with a 3-inch metal folding knife.\" (src: http://www.mlive.com/news/saginaw/index.ssf/2012/07/saginaw_sees_third_police-invo.html ) \"The eight officers, as well as a police dog, had formed a semi-circle around Hall.\" Six of the eight officers fired at Hall. Hall was struck 11 times. \"Hall's family said that he had a history of mental illness.\" He was also homeless. Hall's race taken from this site: http://www.mlive.com/news/saginaw/index.ssf/2012/07/reports_albuquerque_police_act.html", "officer_names": null}, {"incident_date": null, "city": null, "searched_date": "2011-02-04", "victim_age": null, "shots_fired": null, "weapon": null, "victim_race": null, "agency": null, "county": null, "source_url": null, "victim_armed": null, "victim_name": null, "state": null, "shootings": "no", "victim_gender": null, "outcome": null, "summary": null, "officer_names": null}]};


(function() {
  var self = this;

  self.addEventListener('message', function(e) {
    self.init()
      .then(function() {
        var request = e.data,
          id = request.id,
          params = request.params;

        self.postMessage({
          id: id,
          results: self.search(params)
        });
      })
      .error(function(err) {
        console.error(err);
      });
  });



  self.search = function(filterParams) {
    return self.data.filter(function(item) {
      // victim age
      if (item.victim_age < _.deepGet(filterParams, 'victim.age.lower', 0)  || 
          item.victim_age > _.deepGet(filterParams, 'victim.age.upper', 100) 
          ) {
        return false;
      }

      // victim gender
      if (!_.contains(_.deepGet(filterParams, 'victim.gender', []), item.victim_gender)) {
        return false;
      }

      // victim armed
      if (!_.contains(_.deepGet(filterParams, 'victim.armed', []), item.victim_armed)) {
        return false;
      }

      // victim outcome
      if (!_.contains(_.deepGet(filterParams, 'victim.outcome', []), item.outcome)) {
        return false;
      }

      return true;
    });
  };


  // INITIALISATION


  var requiredProps = [
    'victim_age',
    'victim_gender',
    'state',
    'city',
    'agency',
    'outcome',
  ];


  self.init = function() {
    if (!self.data) {
      self.data = [];

      db.results.forEach(function(item) {
        // need required props
        for (var i=0; i<requiredProps.length; ++i) {
          if (!item[requiredProps[i]]) {
            return;
          }
        }

        // get lat/lng
        var state = item.state.toUpperCase(),
          city = item.city.toLowerCase();

        if (stateCities[state] && stateCities[state][city]) {
          item.latlng = stateCities[state][city];
        } else {
          return;
        }

        // normalize fields
        item.victim_gender = item.victim_gender.trim().toLowerCase();
        item.victim_race = (item.victim_race || 'unknown').trim().toLowerCase();

        item.victim_armed = (item.victim_armed || '').trim().toLowerCase();
        switch (item.victim_armed) {
          case 'armed':
          case 'unarmed':
            break;
          default:
            item.outcome = 'unknown';
        }

        item.outcome = (item.outcome || '').trim().toLowerCase();
        switch (item.outcome) {
          case 'hit':
          case 'killed':
            break;
          default:
            item.outcome = 'unknown';
        }

        self.data.push(item);
      });
    }

    return D.resolved();
  }


})(self);
