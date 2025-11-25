import qrcode 
from PIL import Image

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, # high level error correction
    box_size=10, #length
    border=4, # inner border length
)

qr.add_data("https://www.credly.com/users/sumit-rathod.b59b0456")    # add anything in this 

qr.make(fit=True) # size of the QR code

img = qr.make_image(fill_color="black", back_color="white")  # custom colors

img.save("credly.png")  
