from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from rest_framework import status
from apps.missions.models import Mission
from datetime import date


# Create your tests here.


User = get_user_model()

class MissionPermissionsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        # Utilisateur organisation
        self.org_user = User.objects.create_user(
            username="org1", password="nina123", is_organization=True
        )
        # Utilisateur bénévole
        self.volunteer_user = User.objects.create_user(
            username="vol1", password="nina123", is_volunteer=True
        )
        self.mission_data = {
            "title": "Mission Test",
            "description": "Description de test",
            "date": date.today(),   # Obligatoire !
            "location": "Alger",
            "slots": 5,
            "organization": self.org_user.id,  # On envoie l'ID pour PrimaryKeyRelatedField
            "is_archived": False
        }
        self.mission = Mission.objects.create(
            title="Mission existante",
            description="Pour test",
            date=date.today(),
            location="Oran",
            slots=3,
            organization=self.org_user
        )


    def test_org_can_access_missions(self):
        self.client.force_authenticate(user=self.org_user)
        response = self.client.get("/api/missions/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)



    def test_unauthenticated_cannot_access(self):
        response = self.client.get("/api/missions/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    #------------------------------


    def test_org_can_create_mission(self) :
        self.client.force_authenticate(user=self.org_user)
        response = self.client.post("/api/missions/",self.mission_data)
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

    def test_volunteer_cannot_create_mission(self):
        self.client.force_authenticate(user=self.volunteer_user)
        response = self.client.post("/api/missions/",self.mission_data)
        self.assertEqual(response.status_code,status.HTTP_403_FORBIDDEN)

    def test_unauthenticated_cannot_create_mission(self):
        response = self.client.post("/api/missions/",self.mission_data)
        self.assertEqual(response.status_code,status.HTTP_403_FORBIDDEN) 
    

    #------ put/patch
    def test_org_can_update_own_mission(self):
        self.client.force_authenticate(user=self.org_user)
        update_data={"title":"Mission Mise a jour"}
        response = self.client.patch(f"/api/missions/{self.mission.id}/",update_data)   
        self.assertEqual(response.status_code,status.HTTP_200_OK)   
        self.mission.refresh_from_db()
        self.assertEqual(self.mission.title, "Mission Mise a jour")



    def test_user_cannot_update_mission(self):
        self.client.force_authenticate(user=self.volunteer_user)
        update_data={"title":"Mission illegale"}
        response = self.client.patch(f"/api/missions/{self.mission.id}/",update_data)   
        self.assertEqual(response.status_code,status.HTTP_403_FORBIDDEN)     

    def test_unauthenticated_cannot_update_mission(self):
        update_data = {"title": "Mission illegale"}
        response = self.client.patch(f"/api/missions/{self.mission.id}/", update_data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)    


    #------------------------delete 
    def test_org_can_delete_own_mission(self):
        self.client.force_authenticate(user=self.org_user)
        response = self.client.delete(f"/api/missions/{self.mission.id}/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_volunteer_cannot_delete_mission(self):
        mission = Mission.objects.create(
            title="Mission Vol Test",
            description="Test",
            date=date.today(),
            location="Alger",
            slots=2,
            organization=self.org_user
        )
        self.client.force_authenticate(user=self.volunteer_user)
        response = self.client.delete(f"/api/missions/{mission.id}/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_unauthenticated_cannot_delete_mission(self):
        mission = Mission.objects.create(
            title="Mission Unauth Test",
            description="Test",
            date=date.today(),
            location="Alger",
            slots=2,
            organization=self.org_user
        )
        response = self.client.delete(f"/api/missions/{mission.id}/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)          
    print("Tests file loaded")    