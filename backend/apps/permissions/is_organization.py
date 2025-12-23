from rest_framework.permissions import BasePermission

class IsOrganization(BasePermission):
    message = "seules les organisations peuvent effectuer cette action."

    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.is_organization
        )
