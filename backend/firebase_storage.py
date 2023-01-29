from firebase_admin import storage
from django.core.files.storage import Storage

class FirebaseStorage(Storage):
    def __init__(self, *args, **kwargs):
        self.bucket = storage.bucket()
    
    def save(self, name, content, max_length=None):
        blob = self.bucket.blob(name)
        blob.upload_from_file(content)
        return name
    
    